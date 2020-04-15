import {Types} from './actions';
import {createReducer} from 'reduxsauce';

const INIT = {
    loading: false,
    error: null
}

const working = (state=INIT, action) => {
    return {
        ...state,
        loading: action.working
    }
}

const success = (state=INIT, action) => {
    return {
        ...state,
        loading: false,
        byTokenID: action.events
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
    [Types.INIT_SUCCESS]: success,
    [Types.WORKING]: working,
    [Types.FAILURE]: fail
  }
  
  export default createReducer(INIT, HANDLERS);