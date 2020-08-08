import { observable, autorun } from 'mobx'
import RuleStore from './RuleStore'
import InputStore from './InputStore'
import ProcessStore from './ProcessStore'

class OutputStore {
    @observable content?: string

    outputUpdate = autorun(() => {
        let output = InputStore.content
        for (let i = 0; i < RuleStore.selectedRules.length; i++) {
            if (RuleStore.selectedRules[i].name === "Find") {
                if (ProcessStore.selectedProcesses.length) {
                    switch (ProcessStore.selectedProcesses[0].name) {
                        case "remove":
                            output = output.replace(new RegExp(RuleStore.selectedRules[i].value, "g"), "")
                            break
                        case "leave-only":
                            output = output.replace(new RegExp("(" + RuleStore.selectedRules[i].value + ")|(.)", "g"), "$1")
                            break
                        case "replace":
                            output = output.replace(new RegExp(RuleStore.selectedRules[i].value, "g"), ProcessStore.selectedProcesses[i].value)
                            break
                    }
                }
            }
        }
        this.content = output
    })
}

export default new OutputStore()