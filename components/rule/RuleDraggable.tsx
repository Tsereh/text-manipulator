import React from 'react'
import { Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { Rule } from '../../types'
import RuleButton from './RuleButton'

type Props = {
    index: number,
    rule: Rule,
    selected?: boolean
}

const RuleDraggable = (props: Props) => {
    return (
        <Draggable draggableId={props.rule.id} index={props.index}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <RuleButton {...props} provided={provided} snapshot={snapshot} />
            )}
        </Draggable>
    )
}

export default RuleDraggable