import { observer } from 'mobx-react'
import { split as SplitEditor } from "react-ace"
import "ace-builds/src-noconflict/theme-github"
import InputStore from '../../stores/InputStore'
import OutputStore from '../../stores/OutputStore'

const Editor = observer(() => {
    function contentTyped(value: string[]) {
        InputStore.setContent(value[0])
        OutputStore.setContent(value[1])
    }

    return (
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
})

export default Editor