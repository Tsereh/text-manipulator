import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import RuleStore from '../../stores/RuleStore'
import Input from '../common/Input'

const CaseToggle = styled.label<{checked: boolean}>`
    cursor: pointer;
    user-select: none;
    position: relative;
    text-align: center;
    background-color: #fff;
    width: 25px;
    height: 25px;
    margin-left: 5px;
    font-size: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.5);
    transition: color 0.15s ease-in;
    box-shadow: ${props => (props.checked ? 'inset 0px 0px 1px rgba(0,0,0,0.5)' : 'none')};
    & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    & input:checked ~ span {
        color: #0065ff;
    }
`

type Props = {
    index: number
    selected: boolean
}

const RuleValueControls = observer((props: Props) => {
    const rule = props.selected ? RuleStore.selectedRules[props.index] : RuleStore.availableRules[props.index]

    function toggleCaseSensitive() {
        props.selected ? RuleStore.toggleRuleCaseSensitivity(props.index) : RuleStore.toggleAvailableRuleCaseSensitivity(props.index)
    }

    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        props.selected ? RuleStore.setRuleValue(props.index, event.currentTarget.value) : RuleStore.setAvailableRuleValue(props.index, event.currentTarget.value)
    }

    return (
        <React.Fragment>
            <Input setInputValue={setInputValue} value={rule.value} />
            <CaseToggle title={rule.caseSensitive ? "turn case sensitivity off" : "turn case sensitivity on"} checked={rule.caseSensitive}>
                <input type="checkbox" onChange={toggleCaseSensitive} checked={rule.caseSensitive} />
                <span>CASE</span>
            </CaseToggle>
        </React.Fragment>
    )
})

export default RuleValueControls