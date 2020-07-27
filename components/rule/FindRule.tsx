import React from 'react'
import RuleStore from '../../stores/RuleStore'

type Props = {
    ruleIndex: number
}

const FindRule = (props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        RuleStore.setRuleValue(props.ruleIndex, event.currentTarget.value)
    }

    return (
        <div>
            Find
            <input type="text" onChange={setInputValue}></input>
        </div>
    )
}

export default FindRule