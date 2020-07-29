import { useState } from 'react'
import { observer } from "mobx-react"
import ProcessStore from '../../stores/ProcessStore'
import AddProcess from './AddProcess'
import ProcessMenu from './ProcessMenu'
import ProcessItem from './ProcessItem'

const ProcessArea = observer(() => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    const toggleMenuVisibility = () => {
        setMenuVisibility(!menuVisibility)
    }

    return (
        <div>
            {ProcessStore.selectedProcesses.map((process, index) => {
                return <ProcessItem processIndex={index} key={index} />
            })}
            <AddProcess toggleMenuVisibility={toggleMenuVisibility} />
            {menuVisibility && (
                <ProcessMenu toggleMenuVisibility={toggleMenuVisibility} />
            )}
            <style jsx>{`
                div {
                    margin: 10px auto;
                }
            `}</style>
        </div>
    )
})

export default ProcessArea