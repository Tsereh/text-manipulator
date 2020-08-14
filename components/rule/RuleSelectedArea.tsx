import React from 'react'
import styled from 'styled-components'
import { Droppable, DroppableProvided } from 'react-beautiful-dnd'
import RuleDraggable from './RuleDraggable'
import RuleStore from '../../stores/RuleStore'
import { DroppableList, ItemBtn } from '../common/styledComponents'

const Container = styled.div`

`

const RulePlaceholder = styled(ItemBtn)`
    color: rgba(0, 0, 0, 0.5);
`

const RuleSelectedArea = () => {

    return (
        <Container>
            <Droppable droppableId="RuleSelectedArea" direction="horizontal">
                {(provided: DroppableProvided) => (
                    <React.Fragment>
                        <div>Query</div>
                        <DroppableList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {!RuleStore.selectedRules.length && (
                                <RulePlaceholder>Drag rules here</RulePlaceholder>
                            )}
                            {RuleStore.selectedRules.map((rule, index) =>
                                <RuleDraggable key={rule.id} index={index} rule={rule} selected />
                            )}
                            {provided.placeholder}
                        </DroppableList>
                    </React.Fragment>
                )}
            </Droppable>
        </Container>
    )
}

export default RuleSelectedArea