import * as C from "./TitleStyle"

type title = {
  name:string;
}
export function Title ({name}: title) {
 return (
  <>
  <C.Title>
  {name}
</C.Title>
  </>
 )
}