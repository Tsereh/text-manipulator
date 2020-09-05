import { useState, Fragment } from 'react'
import { observer } from "mobx-react"
import styled from 'styled-components'
import { DragDropContext, DropResult, DragStart } from 'react-beautiful-dnd'
import RuleResourceArea from './RuleResourceArea'
import RuleSelectedArea from './RuleSelectedArea'
import { ActionArea } from '../common/styledComponents'
import RuleStore from '../../stores/RuleStore'

const Container = styled(ActionArea)`
    border-radius: 5px 5px 0 0;
`
const Header = styled.h1`
    font-size: 1rem;
    margin-top: 0;
`
const Info = styled.p`
    margin-top: 0;
`

const RuleArea = observer(() => {
    const [draggingSelected, setDraggingSelected] = useState(false)

    const onDragEnd = (result: DropResult) => {
        setDraggingSelected(false)

        const { source, destination } = result

        if (!destination) {
            return
        }

        if (source.droppableId === "RuleResourceArea" && destination.droppableId === "RuleSelectedArea") {
            RuleStore.addRule(RuleStore.availableRules[source.index], destination.index)
            RuleStore.resetAvailableRuleValue(source.index)
        } else if (source.droppableId === "RuleSelectedArea" && destination.droppableId === "RuleSelectedArea") {
            RuleStore.reorder(source.index, destination.index)
        } else if (source.droppableId === "RuleSelectedArea" && destination.droppableId === "RuleResourceArea") {
            RuleStore.removeRule(source.index)
        }
    }

    const onDragStart = (start: DragStart) => {
        start.source.droppableId === "RuleSelectedArea" && setDraggingSelected(true)
    }

    return (
        <Container>
            <Fragment>
                <Header>Query Rules</Header>
                <Info>Drag & drop available rules into the query area, assembling rules into logic that will find parts to process from provided text.</Info>
            </Fragment>
            <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
                <RuleResourceArea key="RuleResourceArea" showRemovalInfo={draggingSelected} />
                <RuleSelectedArea key="RuleSelectedArea" />
            </DragDropContext>
        </Container>
    )
})

export default RuleArea