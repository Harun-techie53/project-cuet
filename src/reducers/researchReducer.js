import * as researchActionTypes from '../actionTypes/researchActionTypes';
import _ from 'lodash';

const researchReducer = (state={}, action) => {
    switch(action.type) {
        case researchActionTypes.FETCH_RESEARCHES_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case researchActionTypes.FETCH_RESEARCHES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                researches: [...action.payload.data]
            }
        case researchActionTypes.CREATE_RESEARCH_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case researchActionTypes.CREATE_RESEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                researches: [
                    ...state.researches,
                    action.payload.data
                ]
            }
        default:
            return state;
    }
}

export default researchReducer;