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
            <Droppable droppableId="RuleSelectedArea">
                {(provided: DroppableProvided) => (
                    <div>
                        <div>Query</div>
                        <DroppableList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {!RuleStore.selectedRules.length && (
                                <RulePlaceholder>Drag rules here</RulePlaceholder>
                            )}
                            {RuleStore.selectedRules.map((rule, index) =>
                                <RuleDraggable key={rule.name + index} index={index} rule={rule} />
                            )}
                            {provided.placeholder}
                        </DroppableList>
                    </div>
                )}
            </Droppable>
        </Container>
    )
}

export default RuleSelectedArea