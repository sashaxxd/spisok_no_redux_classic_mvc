import {FETCH_SERVICES_START, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_ERROR} from "../actions/actionTypes";

const  initialState = {
    ourServices: [],
    loading: false,
    error: null
}

export default function OurServicesReducer(state = initialState, action) {
    switch (action.type){
        case FETCH_SERVICES_START:
            return {
                ...state, loading: true
            }
        case FETCH_SERVICES_SUCCESS:
            return {
                ...state, loading: false, ourServices: action.ourServices
            }
        case FETCH_SERVICES_ERROR:
            return {
                ...state, loading: false, ourServices: action.ourServices
            }
        default:
            return state
    }
}