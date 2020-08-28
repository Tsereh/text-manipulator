import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { DraggableProvided, DraggableStateSnapshot, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd'
import AutosizeInput from 'react-input-autosize'
import RuleStore from '../../stores/RuleStore'
import { RuleBtn } from '../common/styledComponents'
import { Rule } from '../../types'

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

const DraggableRule = styled(RuleBtn)<{isDragging: boolean}>`
    box-shadow: ${props => (props.isDragging ? '1px 1px 5px 0px rgba(0,0,0,0.75)' : 'none')};
`

type Props = {
    index: number,
    rule: Rule,
    selected?: boolean,
    provided: DraggableProvided,
    snapshot: DraggableStateSnapshot
}

function getStyle(style: DraggingStyle | NotDraggingStyle, snapshot: DraggableStateSnapshot, selected?: boolean) {
    if (!snapshot.isDragging && !selected) return {}
    if (!snapshot.isDropAnimating || snapshot.draggingOver === "RuleSelectedArea") {
        return style
    }
    return {
        ...style,
        transitionDuration: `0.001s`
    }
}

const RuleButton = observer((props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        props.selected ? RuleStore.setRuleValue(props.index, event.currentTarget.value) : RuleStore.setAvailableRuleValue(props.index, event.currentTarget.value)
    }

    return (
        <React.Fragment>
            <DraggableRule
                {...props.provided.draggableProps}
                {...props.provided.dragHandleProps}
                ref={props.provided.innerRef}
                style={getStyle(props.provided.draggableProps.style, props.snapshot, props.selected)}
                isDragging={props.snapshot.isDragging}
            >
                Find
                {props.rule.editableValue && (
                    <InputWrapper>
                        <AutosizeInput type="text" onChange={setInputValue} value={props.selected ? RuleStore.selectedRules[props.index].value : RuleStore.availableRules[props.index].value} />
                    </InputWrapper>
                )}
            </DraggableRule>
            {!props.selected && props.snapshot.isDragging && (
                <RuleBtn>
                    Find
                    {props.rule.editableValue && (
                        <InputWrapper>
                            <AutosizeInput type="text"/>
                        </InputWrapper>
                    )}
                </RuleBtn>
            )}
        </React.Fragment>
    )
})

export default RuleButton