import { useState } from 'react'
import { observer } from "mobx-react"
import ProcessStore from '../../stores/ProcessStore'
import AddProcess from './AddProcess'
import ProcessMenu from './ProcessMenu'
import ProcessItem from './ProcessItem'
import { ActionArea } from '../common/styledComponents'

const ProcessArea = observer(() => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    const toggleMenuVisibility = () => {
        setMenuVisibility(!menuVisibility)
    }

    return (
        <ActionArea>
            {ProcessStore.selectedProcesses.map((_process, index) => {
                return <ProcessItem processIndex={index} key={index} />
            })}
            <AddProcess toggleMenuVisibility={toggleMenuVisibility} />
            {menuVisibility && (
                <ProcessMenu toggleMenuVisibility={toggleMenuVisibility} />
            )}
        </ActionArea>
    )
})

export default ProcessArea