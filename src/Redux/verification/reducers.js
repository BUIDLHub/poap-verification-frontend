import {Types, StepState} from './actions';
import {createReducer} from 'reduxsauce';


const INIT = {
    loading: false,
    inviteLink: null,
    authCommand: null,
    status: null,
    error: null
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
        inviteLink: data.inviteLink,
        authCommand: data.authCommand
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
    [Types.WORKING]: working,
    [Types.STATUS]: status,
    [Types.FAILURE]: fail,
    [Types.UPDATE]: update
  }
  
  export default createReducer(INIT, HANDLERS);