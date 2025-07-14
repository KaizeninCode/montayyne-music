import { LuSunMedium } from "react-icons/lu";
import { FaMoon } from "react-icons/fa6";
import { useState } from "react";

// interface HeaderProps {
//   handleThemeToggle: Function,
//   isChecked: Boolean
// }

const Toggle = () => {
    const [icon, setIcon] = useState(<LuSunMedium />)
    const handleClick = () => icon === <LuSunMedium /> ? setIcon(<FaMoon />) : setIcon(<LuSunMedium />)
  return (
    <div className="flex flex-reverse" onClick={handleClick}>
      <input type="checkbox" id="check" className="hidden"/>
      <label htmlFor="check" id="label">{icon}</label>
    </div>
  )
}

export default Toggle
