
export const reducer=(state,action)=>{

    if(action.type === "add"){
        if(state.name=="bilal"){
            return {...state,name:"ali"}

        }else{
            return {...state,name:"bilal"}

        }
    }

    return state
}