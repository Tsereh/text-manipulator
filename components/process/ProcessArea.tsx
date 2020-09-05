import { observer } from "mobx-react"
import styled from 'styled-components'
import ProcessStore from '../../stores/ProcessStore'
import ProcessItem from './ProcessItem'
import { ActionArea, ProcessBtn } from '../common/styledComponents'
import { ProcessTypes } from './ProcessConf'

const Container = styled(ActionArea)`
    margin-top: -10px;
    border-top: none;
    border-radius: 0 0 5px 5px;
    background-color: #f1f8ff;
    border-color: #c8e1ff;
`
const SelectProcessBtn = styled(ProcessBtn)`
    cursor: pointer;
    transition: background-color .2s cubic-bezier(.3,0,.5,1);
    &:hover {
        background-color: #f3f4f6;
    }
`
const Ul = styled.ul`
    padding: 0;
    margin: 0;
`
const Li = styled.li`
    display: inline-block;
`

const ProcessArea = observer(() => {
    return (
        <Container>
            {!ProcessStore.selectedProcess ? (
                <Ul>
                    {ProcessTypes.map((processType, index) => (
                        <Li key={index}>
                            <SelectProcessBtn onClick={() => {
                                ProcessStore.selectProcess(processType)
                            }}>
                                {processType.name}
                            </SelectProcessBtn>
                        </Li>
                    ))}
                </Ul>
            ) : (
                <ProcessItem />
            )}
        </Container>
    )
})

export default ProcessArea