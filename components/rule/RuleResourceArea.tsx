import styled from 'styled-components'
import { Droppable, Draggable, DroppableProvided, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { DroppableList } from '../common/styledComponents'
import RuleStore from '../../stores/RuleStore'
import RuleButton from './RuleButton'

const Container = styled.div`

`

const RuleResourceArea = () => {

    return (
        <Container>
            <Droppable droppableId="RuleResourceArea" direction="horizontal" >
                {(provided: DroppableProvided) => (
                    <div>
                        <div>Available Rules</div>
                        <DroppableList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {RuleStore.availableRules.map((rule, index) => 
                                <Draggable draggableId={rule.id} index={index} key={rule.id} >
                                    {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                        <RuleButton index={index} rule={rule} provided={provided} snapshot={snapshot} />
                                    )}
                                </Draggable>
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