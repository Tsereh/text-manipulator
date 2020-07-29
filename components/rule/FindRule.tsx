import React from 'react'
import RuleStore from '../../stores/RuleStore'
import { RuleBtn } from '../common/styledComponents'

type Props = {
    ruleIndex: number
}

const FindRule = (props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        RuleStore.setRuleValue(props.ruleIndex, event.currentTarget.value)
    }

    return (
        <RuleBtn>
            Find
            <input type="text" onChange={setInputValue}></input>
        </RuleBtn>
    )
}

export default FindRule