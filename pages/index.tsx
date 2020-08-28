import 'mobx-react-lite/batchingForReactDom'
import Head from 'next/head'
import Layout from '../components/Layout'
import RuleArea from '../components/rule/RuleArea'
import ProcessArea from '../components/process/ProcessArea'
import styled from 'styled-components'
import IOArea from '../components/editor/IOArea'
import { resetServerContext } from 'react-beautiful-dnd'

const Main = styled.main`
  padding: 5rem 0;
  width: 1200px;
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
        <ProcessArea />
        <IOArea />
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
        .codeMarker {
          background: #fff677;
          position: absolute;
        }
        #ace-editor {
          border: 1px solid #c1c1c1;
          border-radius: 5px;
        }
      `}</style>
    </Layout>
  )
}
