import styled from 'styled-components'

export const IOTextArea = styled.textarea`
    min-width: 400px;
    min-height: 400px;
    margin: 10px 0;
`

export const IOContainer = styled.div`
    margin: 10px;
`

export const ItemBtn = styled.span`
    margin: 3px;
    padding: 3px;
    border-radius: 3px;
    user-select: none;
    cursor: pointer;
`

export const ProcessBtn = styled(ItemBtn)`
    background-color: #e4f0f5;
`

export const RuleBtn = styled(ItemBtn)`
    background-color: #e4f5e5;
`

export const ActionArea = styled.div`
    margin: 10px auto;
`