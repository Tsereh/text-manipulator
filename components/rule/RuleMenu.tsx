import RuleButton from './RuleButton'

const RuleMenu = (props: {toggleMenuVisibility: Function}) => {
    return (
        <span>
            <RuleButton toggleMenuVisibility={props.toggleMenuVisibility} />
            <RuleButton toggleMenuVisibility={props.toggleMenuVisibility} />
            <RuleButton toggleMenuVisibility={props.toggleMenuVisibility} />
            <RuleButton toggleMenuVisibility={props.toggleMenuVisibility} />
        </span>
    )
}

export default RuleMenu