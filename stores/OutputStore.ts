import { observable, autorun } from 'mobx'
import RuleStore from './RuleStore'
import InputStore from './InputStore'

class OutputStore {
    @observable content?: string

    outputUpdate = autorun(() => {
        let processedInput = InputStore.content
        for (let i = 0; i < RuleStore.selectedRules.length; i++) {
            if (RuleStore.selectedRules[i].name === "Find") {
                processedInput = JSON.stringify(processedInput.match(new RegExp(RuleStore.selectedRules[i].regex, "i")))
            }
        }
        this.content = processedInput
    })
}

export default new OutputStore()