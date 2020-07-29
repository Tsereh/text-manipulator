import styles from '../common/common.module.css'

const AddRule = (props: {toggleMenuVisibility: Function}) => {
    return (
        <span className={`${styles.btn} ${styles.ruleBtn}`} onClick={() => {
            props.toggleMenuVisibility()
        }}>
            Add rule
            <style jsx>{`
                span {
                    cursor: pointer;
                }
            `}</style>
        </span>
    )
}

export default AddRule