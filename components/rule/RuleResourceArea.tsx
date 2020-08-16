import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable, DroppableProvided, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { CSSTransition } from 'react-transition-group'
import { DroppableList, AreaLabel } from '../common/styledComponents'
import RuleStore from '../../stores/RuleStore'
import RuleButton from './RuleButton'

const RemovalWrapper = styled.div<{state: string}>`
    position: relative;
    display: ${props => (props.state === "exited" ? 'none' : 'block')};
`

const RemovalInfo = styled.div<{state: string}>`
    margin-bottom: -50px;
    z-index: 10;
    position: absolute;
    background-color: rgb(255, 201, 201);
    color: rgb(167, 0, 0);
    height: 50px;
    border-radius: 5px;
    display: ${props => (props.state === "exited" ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    width: 100%;
    transition: opacity 200ms cubic-bezier(0.2, 0, 0, 1);
    opacity: 0;
    opacity: ${props => {
        switch (props.state) {
            case "entering" || "exiting" || "exited":
                return "0"
            case "entered":
                return "1"
        }
    }};
`


const RuleResourceArea = (props: { showRemovalInfo: boolean }) => {

    return (
        <Fragment>
            <Droppable droppableId="RuleResourceArea" direction="horizontal" >
                {(provided: DroppableProvided) => (
                    <Fragment>
                        <AreaLabel>Available Rules</AreaLabel>
                        <CSSTransition in={props.showRemovalInfo} timeout={200}>
                            {(state) => (
                                <RemovalWrapper state={state}>
                                    <RemovalInfo state={state}>Drop here to remove</RemovalInfo>
                                </RemovalWrapper>
                            )}
                        </CSSTransition>
                        <DroppableList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <Fragment>
                                {RuleStore.availableRules.map((rule, index) => 
                                    <Draggable draggableId={rule.id} index={index} key={rule.id} >
                                        {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                            <RuleButton index={index} rule={rule} provided={provided} snapshot={snapshot} />
                                        )}
                                    </Draggable>
                                )}
                                {provided.placeholder}
                            </Fragment>
                        </DroppableList>
                    </Fragment>
                )}
            </Droppable>
        </Fragment>
    )
}

export default RuleResourceArea