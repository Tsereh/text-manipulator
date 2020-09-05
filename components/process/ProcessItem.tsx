import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import ProcessStore from '../../stores/ProcessStore'
import { ProcessBtn } from '../common/styledComponents'
import Input from '../common/Input'

const UnsetBtn = styled.span`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    transition: background-color .2s cubic-bezier(.3,0,.5,1);
    &:hover {
        background-color: rgba(0,0,0,.1);
    }
`
const SelectedProcess = styled(ProcessBtn)`
    background-color: #f3f4f6;
`

const ObservedInput = observer(() => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        ProcessStore.setProcessValue(event.currentTarget.value)
    }
    return <Input setInputValue={setInputValue} value={ProcessStore.selectedProcess.value} />
})

const ProcessItem = () => (
    <SelectedProcess>
        <UnsetBtn title="reselect process method" onClick={() => {ProcessStore.unselectProcess()}}>✕</UnsetBtn>
        {ProcessStore.selectedProcess.name}
        {ProcessStore.selectedProcess.editableValue && <ObservedInput />}
    </SelectedProcess>
)

export default ProcessItem