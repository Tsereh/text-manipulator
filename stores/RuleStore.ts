import { observable, action } from 'mobx'
import { Rule } from '../types/index'
import { RuleTypes } from '../components/rule/RuleConf'

class RuleStore {
    //* SELECTED RULES
    @observable selectedRules: Rule[] = []

    @action addRule(rule: Rule, index: number) {
        this.selectedRules.splice(index, 0, rule)
    }

    @action setRuleValue(ruleIndex: number, newValue: string) {
        this.selectedRules[ruleIndex].value = newValue
    }

    //* AVAILABLE RULES
    @observable availableRules: Rule[] = RuleTypes

    @action resetAvailableRuleValue(ruleIndex: number) {
        this.availableRules[ruleIndex].value = ""
    }
}

export default new RuleStore()