import React from 'react'
import RuleStore from '../../stores/RuleStore'
import { RuleBtn } from '../common/styledComponents'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd'
import { Rule } from '../../types'

type Props = {
    index: number,
    rule: Rule
}

const RuleDraggable = (props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        RuleStore.setRuleValue(props.index, event.currentTarget.value)
    }

    return (
        <Draggable draggableId={props.rule.name + props.index} index={props.index}>
            {(provided: DraggableProvided) => (
                <RuleBtn
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    Find
                    {props.rule.editableValue && (<input type="text" onChange={setInputValue}></input>)}
                </RuleBtn>
            )}
        </Draggable>
    )
}

export default RuleDraggable