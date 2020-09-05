import { observable, toJS, action, reaction, autorun } from 'mobx'
import RuleStore from './RuleStore'
import InputStore from './InputStore'
import ProcessStore from './ProcessStore'

class OutputStore {
    worker: Worker

    @observable content?: string

    constructor() {
        // Init worker only on client side
        if (typeof window !== 'undefined') {
            this.worker = new Worker('/output.worker.js')
            this.worker.onmessage = this.handleReceivedOutput
        }
    }

    sendInput = reaction(
        () => InputStore.content,
        () => {
            const data = {
                inputData: toJS(InputStore.content)
            }
            this.worker !== undefined && this.worker.postMessage(data)
        }
    )

    sendRules = autorun(
        () => {
            const data = {
                ruleData: toJS(RuleStore.selectedRules)
            }
            this.worker !== undefined && this.worker.postMessage(data)
        }
    )

    sendProcesses = autorun(
        () => {
            const data = {
                processData: toJS(ProcessStore.selectedProcess)
            }
            this.worker !== undefined && this.worker.postMessage(data)
        }
    )

    @action handleReceivedOutput = (e: MessageEvent) => {
        this.content = e.data
    }

    @action setContent = (value: string) => {
        this.content = value
    }
}

export default new OutputStore()