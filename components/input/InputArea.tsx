import React from 'react'
import { observer } from 'mobx-react'
import InputStore from '../../stores/InputStore'
import styles from '../common/common.module.css'

interface HTMLInputEvent extends React.ChangeEvent {
    target: HTMLInputElement & EventTarget;
}

const InputArea = observer(() => {
    function fileSelected(e: HTMLInputEvent) {
        InputStore.setFile(e.target.files[0])
    }

    function contentTyped(event: React.ChangeEvent<HTMLTextAreaElement>) {
        InputStore.setContent(event.target.value)
    }

    return(
        <div className={styles.contentContainer}>
            <textarea placeholder="Input original text here" className={styles.textarea} value={InputStore.content} onChange={contentTyped} />
            <label htmlFor="inputfile" className="inputfile-label">
                <input type="file" name="inputfile" id="inputfile" onChange={fileSelected} />
            </label>
            
            <style jsx>{`
                #inputfile {
                    display: block;
                }
            `}</style>
        </div>
    )
})

export default InputArea