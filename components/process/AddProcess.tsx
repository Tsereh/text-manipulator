const AddProcess = (props: {toggleMenuVisibility: Function}) => {
    return (
        <span onClick={() => {
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