import { observer } from 'mobx-react'
import styles from "../common/common.module.css"
import OutputStore from '../../stores/OutputStore'

const OutputArea = observer(() => {
  return (
    <div placeholder="Processed text will be shown here" className={styles.contentContainer}>
      <div className="backdrop">
        <div className="highlights"></div>
      </div>
      <textarea className={styles.textarea} id="outputField" value={OutputStore.content} placeholder="Processed output will be shown here" />
      <button id="download-btn">Download File</button>
      <style jsx>{`
        #download-btn {
          display: block;
        }
      `}</style>
    </div>
  );
});

export default OutputArea