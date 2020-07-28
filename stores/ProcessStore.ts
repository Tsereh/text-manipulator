import { observable, action } from 'mobx'
import { Process } from '../types/index'

class ProcessStore {
    @observable selectedProcesses: Process[] = []

    @action addProcess(process: Process) : Number { 
        return this.selectedProcesses.push(process)
    }

    @action setProcessValue(processIndex: number, newValue: string) {
        this.selectedProcesses[processIndex].value = newValue
    }
}

export default new ProcessStore()