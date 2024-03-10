import { useReducer } from "react"

const ACTION = {
ADD: "Add"

} 


type State = {string: string}
type Action = {type: string}

const stringerReducer = (state: State, action: Action) => {
    switch (action.type){
        case ACTION.ADD:
            return {string: state.string + "R" }


        default:
        return state    
    }
      


}



const Stringer = () => {
    const [state, dispatch] = useReducer(stringerReducer, {string: ""} )
  
  
    return (
    <>
   
    
    
    
    </>
  )
}

export default Stringer