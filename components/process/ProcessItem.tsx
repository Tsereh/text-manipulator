import React from 'react'
import ProcessStore from '../../stores/ProcessStore'
import { processButtonText } from '../../utils/utils'
import { ProcessBtn } from '../common/styledComponents'

type Props = {
    processIndex: number
}

const FindRule = (props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        ProcessStore.setProcessValue(props.processIndex, event.currentTarget.value)
    }

    return (
        <ProcessBtn>
            {processButtonText(ProcessStore.selectedProcesses[props.processIndex].name)}
            {ProcessStore.selectedProcesses[props.processIndex].name == "replace" && <input type="text" onChange={setInputValue}></input>}
        </ProcessBtn>
    )
}

export default FindRule