import React from 'react'
import ProcessStore from '../../stores/ProcessStore'
import { processButtonText } from '../../utils/utils'

type Props = {
    processIndex: number
}

const FindRule = (props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        ProcessStore.setProcessValue(props.processIndex, event.currentTarget.value)
    }

    return (
        <div>
            {processButtonText(ProcessStore.selectedProcesses[props.processIndex].name)}
            {ProcessStore.selectedProcesses[props.processIndex].name == "replace" && <input type="text" onChange={setInputValue}></input>}
        </div>
    )
}

export default FindRule