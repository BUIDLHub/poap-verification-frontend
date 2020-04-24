import {Types, StepState} from './actions';
import {createReducer} from 'reduxsauce';


const INIT = {
    loading: false,
    inviteLinks: [],
    status: null,
    error: null,
    completed: false
}


const working = (state=INIT, action) => {
    return {
        ...state,
        loading: action.working 
    }
}

const status = (state=INIT, action) => {
    return {
        ...state,
        error: null,
        status: action.status
    }
}

const update = (state=INIT, action) => {
    let data = action.data;
    return {
        ...state,
        loading: false,
        inviteLinks: data,
        completed: true
    }
}

const clear = (state=INIT) => {
    return {
        ...state,
        loading: false,
        completed: false,
        inviteLinks: [],
        error: null
    }
}

const fail = (state=INIT, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const HANDLERS = {
    [Types.CLEAR]: clear,
    [Types.WORKING]: working,
    [Types.STATUS]: status,
    [Types.FAILURE]: fail,
    [Types.UPDATE]: update
  }
  
  export default createReducer(INIT, HANDLERS);