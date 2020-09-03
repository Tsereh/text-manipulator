import { useState } from 'react'
import { observer } from "mobx-react"
import styled from 'styled-components'
import ProcessStore from '../../stores/ProcessStore'
import AddProcess from './AddProcess'
import ProcessMenu from './ProcessMenu'
import ProcessItem from './ProcessItem'
import { ActionArea } from '../common/styledComponents'

const Area = styled(ActionArea)`
    margin-top: -15px;
    padding-top: 15px;
    border-top: none;
    border-radius: 0 0 5px 5px;
`

const ProcessArea = observer(() => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    const toggleMenuVisibility = () => {
        setMenuVisibility(!menuVisibility)
    }

    return (
        <Area>
            {ProcessStore.selectedProcesses.map((_process, index) => {
                return <ProcessItem processIndex={index} key={index} />
            })}
            <AddProcess toggleMenuVisibility={toggleMenuVisibility} />
            {menuVisibility && (
                <ProcessMenu toggleMenuVisibility={toggleMenuVisibility} />
            )}
        </Area>
    )
})

export default ProcessArea