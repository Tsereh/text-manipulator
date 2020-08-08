import styled from 'styled-components'
import { Droppable, DroppableProvided } from 'react-beautiful-dnd'
import RuleDraggable from './RuleDraggable'
import { DroppableList } from '../common/styledComponents'
import RuleStore from '../../stores/RuleStore'

const Container = styled.div`

`

const RuleResourceArea = () => {

    return (
        <Container>
            <Droppable droppableId="RuleResourceArea">
                {(provided: DroppableProvided) => (
                    <div>
                        <div>Available Rules</div>
                        <DroppableList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {RuleStore.availableRules.map((rule, index) => 
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

export default RuleResourceArea