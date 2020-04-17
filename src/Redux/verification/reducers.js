import {Types, StepState} from './actions';
import {createReducer} from 'reduxsauce';


const INIT = {
    steps: {}
}

const start = (state=INIT, action) => {
    let steps = {
        ...state.steps
    }
    action.steps.forEach(s=>{
        steps[s.id] = s;
    });

    return {
        steps
    }
}

const update = (state=INIT, action) => {
    let s = action.step;
    let steps = {
        ...state.steps,
        [s.id]: s
    };
    return {
        steps
    }
}


const HANDLERS = {
    [Types.INIT_SUCCESS]: start,
    [Types.UPDATE]: update
  }
  
  export default createReducer(INIT, HANDLERS);