import React from 'react'
import RuleStore from '../../stores/RuleStore'
import styles from '../common/common.module.css'

type Props = {
    ruleIndex: number
}

const FindRule = (props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        RuleStore.setRuleValue(props.ruleIndex, event.currentTarget.value)
    }

    return (
        <span className={`${styles.btn} ${styles.ruleBtn}`}>
            Find
            <input type="text" onChange={setInputValue}></input>
        </span>
    )
}

export default FindRule