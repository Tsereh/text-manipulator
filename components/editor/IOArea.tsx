import React, { useState } from 'react'
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
        background-color: rgb(231 232 232);
        padding: 0px 6px;
        border-radius: 5px 5px 0 0;
        border: 1px solid #d9d9da;
        border-bottom: none;
    }
`
const HighlighToggle = styled.label`
    position: absolute;
    right: 10px;
    margin-top: -6px;
    display: block;
    padding-left: 45px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 17px;
    user-select: none;
    & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    & input:checked ~ span {
        background-color: #fff677;
        box-shadow: inset 0px 0px 10px 0px rgb(0 0 0 / 0.1);
    }
    & input:checked ~ span:after {
        left: 22px;
    }
`
const Control = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 40px;
    border-radius: 25px;
    background-color: darkgray;
    transition: background-color 0.15s ease-in;
    &:after {
        content: "";
        position: absolute;
        left: 2px;
        top: 2px;
        width: 16px;
        height: 16px;
        border-radius: 25px;
        background: white;
        transition: left 0.15s ease-in;
    }
`

interface HTMLInputEvent extends React.ChangeEvent {
    target: HTMLInputElement & EventTarget;
}

const IOArea = () => {
    const [highlight, setHighlight] = useState(false)

    function toggleHighlight() {
        setHighlight(!highlight)
    }

    function fileSelected(e: HTMLInputEvent) {
        InputStore.setFile(e.target.files[0])
    }

    return (
        <ActionArea>
            <HighlighToggle>
                <input type="checkbox" checked={highlight} onChange={toggleHighlight} />
                <Control />
                Highlight changes
            </HighlighToggle>
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
            <Editor highligh={highlight} />
            <FileManager>
                <div>
                    <label htmlFor="inputfile" className="inputfile-label">
                        <Input type="file" name="inputfile" id="inputfile" onChange={fileSelected} />
                    </label>
                </div>
                <div>
                    <button>Save Result</button>
                </div>
            </FileManager>
        </ActionArea>
    )
}

export default IOArea