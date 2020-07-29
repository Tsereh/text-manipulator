import RuleStore from '../../stores/RuleStore'
import { RuleBtn } from '../common/styledComponents'

const RuleButton = (props: {toggleMenuVisibility: Function}) => {
    return (
        <RuleBtn onClick={() => {
            RuleStore.addRule({name: "find", regex: ""})
            props.toggleMenuVisibility()
        }}>
            Find character sequence
        </RuleBtn>
    )
}

export default RuleButton