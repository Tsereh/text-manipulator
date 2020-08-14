import React from 'react'
import { observer } from 'mobx-react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import RuleStore from '../../stores/RuleStore'
import { RuleBtn } from '../common/styledComponents'
import { Rule } from '../../types'

type Props = {
    index: number,
    rule: Rule,
    selected?: boolean,
    provided: DraggableProvided,
    snapshot: DraggableStateSnapshot
}

const RuleButton = observer((props: Props) => {
    function setInputValue(event: React.FormEvent<HTMLInputElement>) {
        props.selected ? RuleStore.setRuleValue(props.index, event.currentTarget.value) : RuleStore.setAvailableRuleValue(props.index, event.currentTarget.value)
    }

    return (
        <React.Fragment>
            <RuleBtn
                {...props.provided.draggableProps}
                {...props.provided.dragHandleProps}
                ref={props.provided.innerRef}
            >
                Find
                {props.rule.editableValue && (<input type="text" onChange={setInputValue} value={props.selected ? RuleStore.selectedRules[props.index].value : RuleStore.availableRules[props.index].value} />)}
            </RuleBtn>
            {!props.selected && props.snapshot.isDragging && (
                <RuleBtn>
                    Find
                    {props.rule.editableValue && (<input type="text"/>)}
                </RuleBtn>
            )}
        </React.Fragment>
    )
})

export default RuleButton