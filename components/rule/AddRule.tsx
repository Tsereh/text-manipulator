import RuleStore from '../../stores/RuleStore'
import { RuleBtn } from '../common/styledComponents'

const AddRule = (props: {toggleMenuVisibility: Function}) => {
    return (
        <RuleBtn onClick={() => {
            props.toggleMenuVisibility()
        }}>
            {RuleStore.selectedRules.length ? "+" : "Find"}
        </RuleBtn>
    )
}

export default AddRule