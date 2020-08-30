import React from 'react'
import { observer } from 'mobx-react'
import { diff as DiffEditor, split as SplitEditor } from "react-ace"
import "ace-builds/src-noconflict/theme-github"
import InputStore from '../../stores/InputStore'
import OutputStore from '../../stores/OutputStore'

type Props = {
    highligh: boolean
}

const Editor = observer((props: Props) => {
    function contentTyped(value: string[]) {
        InputStore.setContent(value[0])
        OutputStore.setContent(value[1])
    }

    return (
        <React.Fragment>
            {
                props.highligh ?
                    (
                        <DiffEditor
                            splits={2}
                            value={[InputStore.content ? InputStore.content : "", OutputStore.content ? OutputStore.content : ""]}
                            height="500px"
                            width="1180px"
                            mode="text"
                            theme="github"
                            wrapEnabled={false}
                            setOptions={{
                                useWorker: false
                            }}
                            onChange={contentTyped}
                        />
                    )
                :
                    (
                        // @ts-ignore
                        <SplitEditor
                            splits={2}
                            value={[InputStore.content ? InputStore.content : "", OutputStore.content ? OutputStore.content : ""]}
                            height="500px"
                            width="1180px"
                            mode="text"
                            theme="github"
                            wrapEnabled={false}
                            setOptions={{
                                useWorker: false
                            }}
                            onChange={contentTyped}
                        />
                    )
            }
        </React.Fragment>
    )
})

export default Editor