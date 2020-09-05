import { observable, action } from 'mobx'
import { Process } from '../types/index'

class ProcessStore {
    @observable selectedProcess: Process

    @action selectProcess(process: Process) { 
        this.selectedProcess = process
    }

    @action setProcessValue(newValue: string) {
        this.selectedProcess.value = newValue
    }

    @action unselectProcess() {
        this.selectedProcess = undefined
    }
}

export default new ProcessStore()