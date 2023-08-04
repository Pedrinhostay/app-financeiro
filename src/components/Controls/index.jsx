import { ControlsItem } from "../ControlsItem"
import * as C from"./style"
import { BiBarChart,BiChevronUp,BiChevronDown} from "react-icons/bi";
export function Controls({income, expense, total}){
  return(
    <C.Container>
      <ControlsItem 
      title="Entradas" 
      Icon={BiChevronUp} 
      value={income}/>
      <ControlsItem title="Saídas"
      Icon={BiChevronDown} 
      value={expense}/>
      <ControlsItem title="Total" 
      Icon={BiBarChart} 
      value={total}/>
      </C.Container>
  )
}