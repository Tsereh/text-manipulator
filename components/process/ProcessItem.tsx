import React from 'react'
import ProcessStore from '../../stores/ProcessStore'
import { processButtonText } from '../../utils/utils'
import styles from '../common/common.module.css'

type Props = {
    processIndex: number
}

const FindRule = (props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        ProcessStore.setProcessValue(props.processIndex, event.currentTarget.value)
    }

    return (
        <span className={`${styles.btn} ${styles.processBtn}`}>
            {processButtonText(ProcessStore.selectedProcesses[props.processIndex].name)}
            {ProcessStore.selectedProcesses[props.processIndex].name == "replace" && <input type="text" onChange={setInputValue}></input>}
        </span>
    )
}

export default FindRule