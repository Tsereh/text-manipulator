import React from 'react'
import styled from 'styled-components'
import InputStore from '../../stores/InputStore'
import Editor from './Editor'
import { ActionArea } from '../common/styledComponents'

const Input = styled.input`
    display: block;
`
const FileManager = styled.div`
    margin-top: 10px;
    & div {
        display: inline-block;
        width: 50%;
    }
`
const Headers = styled.div`
    & div {
        display: inline-block;
        width: 50%;
    }
    & span {
        margin-left: 45px;
        color: rgba(0,0,0,0.8);
    }
`

interface HTMLInputEvent extends React.ChangeEvent {
    target: HTMLInputElement & EventTarget;
}

const IOArea = () => {
    function fileSelected(e: HTMLInputEvent) {
        InputStore.setFile(e.target.files[0])
    }

    return (
        <ActionArea>
            <Headers>
                <div>
                    <span>
                        Input:
                    </span>
                </div>
                <div>
                    <span>
                        Result:
                    </span>
                </div>
            </Headers>
            <Editor />
            <FileManager>
                <div>
                    <label htmlFor="inputfile" className="inputfile-label">
                        <Input type="file" name="inputfile" id="inputfile" onChange={fileSelected} />
                    </label>
                </div>
                <div>
                    <button>Download File</button>
                </div>
            </FileManager>
        </ActionArea>
    )
}

export default IOArea