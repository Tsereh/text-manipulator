import { ProcessBtn } from '../common/styledComponents'

const AddProcess = (props: {toggleMenuVisibility: Function}) => {
    return (
        <ProcessBtn onClick={() => {
            props.toggleMenuVisibility()
        }}>
            Define changes
        </ProcessBtn>
    )
}

export default AddProcess