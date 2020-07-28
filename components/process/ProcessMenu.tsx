import ProcessMenuItem from './ProcessMenuItem'

const ProcessMenu = (props: {toggleMenuVisibility: Function}) => {
    return (
        <span>
            <ProcessMenuItem toggleMenuVisibility={props.toggleMenuVisibility} processType="remove" />
            <ProcessMenuItem toggleMenuVisibility={props.toggleMenuVisibility} processType="leave-only" />
            <ProcessMenuItem toggleMenuVisibility={props.toggleMenuVisibility} processType="replace" />
        </span>
    )
}

export default ProcessMenu