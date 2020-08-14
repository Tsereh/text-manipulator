import { observer } from "mobx-react"
import styled from 'styled-components'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import RuleResourceArea from './RuleResourceArea'
import RuleSelectedArea from './RuleSelectedArea'
import { ActionArea } from '../common/styledComponents'
import RuleStore from '../../stores/RuleStore'

const Header = styled.h1`
    font-size: 1rem;
    margin-top: 0;
`

const Info = styled.p`
    margin-top: 0;
    color: rgba(0, 0, 0, 0.8);
`

const RuleArea = observer(() => {
    const onDragEnd = (result: DropResult) => {
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

    return (
        <ActionArea>
            <div>
                <Header>Query Rules</Header>
                <Info>Drag & drop available rules into the query area, assembling rules into logic that will find parts to process from provided text.</Info>
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
                <RuleResourceArea key="RuleResourceArea" />
                <RuleSelectedArea key="RuleSelectedArea" />
            </DragDropContext>
        </ActionArea>
    )
})

export default RuleArea