import {GETTING, GOTMINE, ERROR} from '../actions';

const initialState = {
    projects: [],
    getting: false,
    error: null
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case GETTING:
            return{...state, getting: true}
        case GOTMINE:
            return{
                ...state,
                projects: action.payload,
                getting: false
            }
        case ERROR:
            return{
                ...state,
                getting: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;