import {Types} from './actions'
import {createReducer} from 'reduxsauce'

const INIT = {
    loading: false,
    error: null,
    instance: null
};


const start = (state=INIT) => {
    return {
        ...state, 
        loading: true, 
        error: null
    }
}

const done = (state=INIT, action) => {
    return {
        ...state,
        loading: false, 
        instance: action.storage
    }
}


const fail = (state=INIT, action) => {
    return {
        ...state, 
        loading: false,
        error: action.error
    }
}

const update = (state=INIT, action) => {
    return {
        ...state,
        instance: action.storage
    }
}


const HANDLERS = {
    [Types.INIT_START]: start,
    [Types.INIT_SUCCESS]: done, 
    [Types.FAILURE]: fail,
    [Types.CHANGE_NETWORK]: update
}

export default createReducer(INIT, HANDLERS);