import { Rule } from '../../types'

export const RuleTypes: Rule[] = [
    {
        id: "0",
        type: "find",
        name: "Sequence",
        editableValue: true,
        value: "",
        caseSensitive: true
    },
    {
        id: "1",
        type: "anyof",
        name: "Any of",
        editableValue: true,
        value: "",
        caseSensitive: true
    }
]