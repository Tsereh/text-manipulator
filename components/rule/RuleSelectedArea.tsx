import { Fragment } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable, DroppableProvided, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import RuleStore from '../../stores/RuleStore'
import { DroppableList, ItemBtn, AreaLabel } from '../common/styledComponents'
import RuleButton from './RuleButton'

const RulePlaceholder = styled(ItemBtn)`
    color: rgba(0, 0, 0, 0.5);
`

const RuleSelectedArea = () => {

    return (
        <Fragment>
            <Droppable droppableId="RuleSelectedArea" direction="horizontal">
                {(provided: DroppableProvided) => (
                    <Fragment>
                        <AreaLabel>Query</AreaLabel>
                        <DroppableList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {!RuleStore.selectedRules.length && (
                                <RulePlaceholder>Drag rules here</RulePlaceholder>
                            )}
                            {RuleStore.selectedRules.map((rule, index) =>
                                <Draggable draggableId={rule.id} index={index} key={rule.id} >
                                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                        <RuleButton index={index} rule={rule} provided={provided} snapshot={snapshot} selected />
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </DroppableList>
                    </Fragment>
                )}
            </Droppable>
        </Fragment>
    )
}

export default RuleSelectedArea