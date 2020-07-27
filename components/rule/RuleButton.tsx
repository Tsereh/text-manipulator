import RuleStore from '../../stores/RuleStore'

const RuleButton = (props: {toggleMenuVisibility: Function}) => {
    return (
        <span onClick={() => {
            RuleStore.addRule({name: "Find", regex: ""})
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