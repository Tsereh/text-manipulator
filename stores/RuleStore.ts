import { observable, action } from 'mobx'
import { Rule } from '../types/index'

class RuleStore {
    @observable selectedRules: Rule[] = []

    @action addRule(rule: Rule) : Number { 
        return this.selectedRules.push(rule)
    }

    @action setRuleValue(ruleIndex: number, newValue: string) {
        this.selectedRules[ruleIndex].regex = newValue
    }
}

export default new RuleStore()