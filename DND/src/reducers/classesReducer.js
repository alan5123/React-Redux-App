import {FETCH_DATA, UPDATE_DATA} from '../actions/index'

const inititalState = {
    classes: [],
    isFetchingData:false,
    error:''
}

export const classesReducer = (state = inititalState, action) => {
    switch (action.type) {
        case FETCH_DATA: {
            return{
                ...state,
                isFetchingData: true,
                classes:[]
            }
        }
        case UPDATE_DATA:
            return {
              ...state,
              classes: action.payload,
              isFetchingData: false
            };
        default:
            return state
    }
}