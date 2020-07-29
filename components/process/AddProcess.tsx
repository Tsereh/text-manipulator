import styles from '../common/common.module.css'

const AddProcess = (props: {toggleMenuVisibility: Function}) => {
    return (
        <span className={`${styles.btn} ${styles.processBtn}`} onClick={() => {
            props.toggleMenuVisibility()
        }}>
            Define changes
            <style jsx>{`
                span {
                    cursor: pointer;
                }
            `}</style>
        </span>
    )
}

export default AddProcess