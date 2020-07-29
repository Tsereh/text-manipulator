import React from 'react'
import { observer } from 'mobx-react'
import InputStore from '../../stores/InputStore'
import styled from 'styled-components'
import { IOTextArea, IOContainer } from '../common/styledComponents'

const Input = styled.input`
    display: block;
`

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
        <IOContainer>
            <IOTextArea placeholder="Input original text here" value={InputStore.content} onChange={contentTyped} />
            <label htmlFor="inputfile" className="inputfile-label">
                <Input type="file" name="inputfile" id="inputfile" onChange={fileSelected} />
            </label>
        </IOContainer>
    )
})

export default InputArea