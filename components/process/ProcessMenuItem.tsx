import ProcessStore from '../../stores/ProcessStore'
import { processButtonText } from '../../utils/utils'
import { ProcessBtn } from '../common/styledComponents'

const ProcessMenuItem = (props: {toggleMenuVisibility: Function, processType: string}) => {
    return (
        <ProcessBtn onClick={() => {
            ProcessStore.addProcess({name: props.processType, value: ""})
            props.toggleMenuVisibility()
        }}>
            {processButtonText(props.processType)}
        </ProcessBtn>
    )
}

export default ProcessMenuItem