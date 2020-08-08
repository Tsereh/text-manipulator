import 'mobx-react-lite/batchingForReactDom'
import Head from 'next/head'
import Layout from '../components/Layout'
import InputArea from '../components/input/InputArea'
import OutputArea from '../components/output/OutputArea'
import RuleArea from '../components/rule/RuleArea'
import ProcessArea from '../components/process/ProcessArea'
import RuleStore from '../stores/RuleStore'
import styled from 'styled-components'
import { resetServerContext } from 'react-beautiful-dnd'

const Main = styled.main`
  padding: 5rem 0;
  width: 1200px;
`
const IORow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div:nth-of-type(1) {
    margin-right: 10px;
  }

  div:nth-of-type(2) {
    margin-left: 10px;
  }
`

export default function Home() {
  resetServerContext()

  return (
    <Layout>
      <Head>
        <title>Text Manipulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <RuleArea />
        {RuleStore.selectedRules && <ProcessArea />}
        <IORow>
          <InputArea />
          <OutputArea />
        </IORow>
      </Main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  )
}
