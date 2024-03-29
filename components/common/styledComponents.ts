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
    padding: 2px 4px;
    border-radius: 3px;
    user-select: none;
    display: flex;
    align-items: center;
`

export const ProcessBtn = styled(ItemBtn)`
    margin: 3px;
    border-radius: 3px;
    width: fit-content;
    color: #586069;
    box-shadow: inset 0 1px 0 rgba(225,228,232,.2);
    border: 1px solid #e1e4e8;
    background-color: #fff;
    min-height: 31px;
`

export const RuleBtn = styled(ItemBtn)`
    background-color: #e4f5e5;
    border: 1px solid #d5e8d6;
`

export const ActionArea = styled.div`
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    box-shadow: 0px 0.5px 1px 0px rgb(0 0 0 / 25%);
    position: relative;
`

export const DroppableList = styled.div`
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    min-height: 50px;
`

export const AreaLabel = styled.div`
    font-size: 0.9rem;
    margin-left: 3px;
    color: rgba(0, 0, 0, 0.8);
`