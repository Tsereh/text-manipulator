import { observable, action } from 'mobx'
import { Rule } from '../types/index'
import { RuleTypes } from '../components/rule/RuleConf'
import { v4 as uuid } from 'uuid'

class RuleStore {
    //* SELECTED RULES
    @observable selectedRules: Rule[] = []

    @action addRule(rule: Rule, index: number) {
        this.selectedRules.splice(index, 0, {...rule, id: uuid()})
    }

    @action reorder(startIndex: number, endIndex: number) {
        const [removed] = this.selectedRules.splice(startIndex, 1)
        this.selectedRules.splice(endIndex, 0, removed)
    }

    @action setRuleValue(ruleIndex: number, newValue: string) {
        this.selectedRules[ruleIndex].value = newValue
    }

    @action toggleRuleCaseSensitivity(ruleIndex: number) {
        this.selectedRules[ruleIndex].caseSensitive = !this.selectedRules[ruleIndex].caseSensitive
    }

    @action removeRule(index: number) {
        this.selectedRules.splice(index, 1)
    }

    //* AVAILABLE RULES
    @observable availableRules: Rule[] = RuleTypes

    @action resetAvailableRuleValue(ruleIndex: number) {
        this.availableRules[ruleIndex].value = ""
    }

    @action setAvailableRuleValue(ruleIndex: number, newValue: string) {
        this.availableRules[ruleIndex].value = newValue
    }

    @action toggleAvailableRuleCaseSensitivity(ruleIndex: number) {
        this.availableRules[ruleIndex].caseSensitive = !this.availableRules[ruleIndex].caseSensitive
    }
}

export default new RuleStore()