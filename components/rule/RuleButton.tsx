import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import { DraggableProvided, DraggableStateSnapshot, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd'
import { RuleBtn } from '../common/styledComponents'
import { Rule } from '../../types'
import RuleValueControls from './RuleValueControls'

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

// Make draggable drop animation unvisible when dropping selected rule to be removed (by setting transition to minimal value)
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
    return (
        <React.Fragment>
            <DraggableRule
                {...props.provided.draggableProps}
                {...props.provided.dragHandleProps}
                ref={props.provided.innerRef}
                style={getStyle(props.provided.draggableProps.style, props.snapshot, props.selected)}
                isDragging={props.snapshot.isDragging}
            >
                {props.rule.name}
                {props.rule.editableValue && <RuleValueControls index={props.index} selected={props.selected} />}
            </DraggableRule>
            {!props.selected && props.snapshot.isDragging && (
                <RuleBtn>
                    {props.rule.name}
                    {props.rule.editableValue && <RuleValueControls index={props.index} selected={props.selected} />}
                </RuleBtn>
            )}
        </React.Fragment>
    )
})

export default RuleButton