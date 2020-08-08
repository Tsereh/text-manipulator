import styled from 'styled-components'

export const IOTextArea = styled.textarea`
    min-width: 400px;
    min-height: 400px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
`

export const IOContainer = styled.div`
    flex-grow: 1;
`

export const ItemBtn = styled.span`
    margin: 3px;
    padding: 3px;
    border-radius: 3px;
    user-select: none;
`

export const ProcessBtn = styled(ItemBtn)`
    background-color: #e4f0f5;
`

export const RuleBtn = styled(ItemBtn)`
    background-color: #e4f5e5;
`

export const ActionArea = styled.div`
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
`

export const DroppableList = styled.div`
    margin: 5px 0 10px;
    padding: 10px 5px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
`