import 'mobx-react-lite/batchingForReactDom'
import Head from 'next/head'
import Layout from '../components/Layout'
import InputArea from '../components/input/InputArea'
import OutputArea from '../components/output/OutputArea'
import RuleArea from '../components/rule/RuleArea'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Text Manipulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RuleArea />
        <div className="ioRow">
          <InputArea />
          <OutputArea />
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
        }

        .ioRow {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        #inputfile {
          display: block;
        }

        #download-btn {
          display: block;
        }
      `}</style>

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
