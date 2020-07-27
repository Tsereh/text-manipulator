import { useState } from 'react'
import { observer } from "mobx-react"
import RuleStore from '../../stores/RuleStore'
import AddRule from './AddRule'
import RuleMenu from './RuleMenu'
import FindRule from './FindRule'

const RuleArea = observer(() => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    const toggleMenuVisibility = () => {
        setMenuVisibility(!menuVisibility)
    }

    return (
        <div>
            {RuleStore.selectedRules.map((rule, index) => {
                return rule.name === "Find" && <FindRule ruleIndex={index} key={index} />
            })}
            <AddRule toggleMenuVisibility={toggleMenuVisibility} />
            {menuVisibility && (
                <RuleMenu toggleMenuVisibility={toggleMenuVisibility} />
            )}
        </div>
    )
})

export default RuleArea