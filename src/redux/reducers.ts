import { SET_COLOR } from "./actions"


type actionType = {
    type: string,
    payload: any
}
export const setColorReducer = (state: any, action: actionType) => {
    switch(action.type){
        case SET_COLOR:
            return ''
    }
}