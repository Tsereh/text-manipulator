import AutosizeInput from 'react-input-autosize'
import styled from 'styled-components'

const InputWrapper = styled.div`
    & > div > input {
        border: none;
        margin-left: 5px;
        min-width: 30px;
        padding: 5px 3px;
        min-width: 40px;
        background-color: #fff;
        &:focus {
            outline: 0;
            box-shadow: inset 0px 0px 1px rgba(0,0,0,0.5);
        }
    }
`

type ValueCallback = (arg: React.FormEvent<HTMLInputElement>) => void
type Props = {
    value: string,
    setInputValue: ValueCallback
}

const Input = (props: Props) => (
    <InputWrapper>
        <AutosizeInput type="text" onChange={props.setInputValue} value={props.value} />
    </InputWrapper>
)

export default Input