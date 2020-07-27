const AddRule = (props: {toggleMenuVisibility: Function}) => {
    return (
        <span onClick={() => {
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