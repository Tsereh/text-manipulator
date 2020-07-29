import ProcessStore from '../../stores/ProcessStore'
import { processButtonText } from '../../utils/utils'
import styles from '../common/common.module.css'

const ProcessMenuItem = (props: {toggleMenuVisibility: Function, processType: string}) => {
    return (
        <span className={`${styles.btn} ${styles.processBtn}`} onClick={() => {
            ProcessStore.addProcess({name: props.processType, value: ""})
            props.toggleMenuVisibility()
        }}>
            {processButtonText(props.processType)}
            <style jsx>{`
                span {
                    cursor: pointer;
                }
            `}</style>
        </span>
    )
}

export default ProcessMenuItem