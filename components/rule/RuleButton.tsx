import RuleStore from '../../stores/RuleStore'
import styles from '../common/common.module.css'

const RuleButton = (props: {toggleMenuVisibility: Function}) => {
    return (
        <span className={`${styles.btn} ${styles.ruleBtn}`} onClick={() => {
            RuleStore.addRule({name: "find", regex: ""})
            props.toggleMenuVisibility()
        }}>
            Find character sequence
            <style jsx>{`
                span {
                    cursor: pointer;
                }
            `}</style>
        </span>
    )
}

export default RuleButton