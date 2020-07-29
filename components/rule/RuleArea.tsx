import { useState } from 'react'
import { observer } from "mobx-react"
import RuleStore from '../../stores/RuleStore'
import AddRule from './AddRule'
import RuleMenu from './RuleMenu'
import FindRule from './FindRule'
import { ActionArea } from '../common/styledComponents'

const RuleArea = observer(() => {
    const [menuVisibility, setMenuVisibility] = useState(false)

    const toggleMenuVisibility = () => {
        setMenuVisibility(!menuVisibility)
    }

    return (
        <ActionArea>
            {RuleStore.selectedRules.map((rule, index) => {
                return rule.name === "find" && <FindRule ruleIndex={index} key={index} />
            })}
            <AddRule toggleMenuVisibility={toggleMenuVisibility} />
            {menuVisibility && (
                <RuleMenu toggleMenuVisibility={toggleMenuVisibility} />
            )}
        </ActionArea>
    )
})

export default RuleArea