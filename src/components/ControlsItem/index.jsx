import * as C from "./style";

export function ControlsItem({title, Icon, value}){
  return(
    <C.Container>
      <C.Header>
      <C.HeaderTitle>{title}</C.HeaderTitle>
      <Icon/>
      </C.Header>
      <C.Total>{value}</C.Total>
      </C.Container>
  )
}