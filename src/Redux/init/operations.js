import {Creators} from './actions';
import {default as web3Ops} from 'Redux/web3/operations';
import {default as poapOps} from 'Redux/poap/operations';
import {default as storageOps} from 'Redux/storage/operations';
import {default as verOps} from 'Redux/verification/operations';


const initStorage = async props => {
  return props.dispatch(storageOps.init())
    .then(()=>props);
}

const initWallet = async props => {
  return props.dispatch(web3Ops.init())
      .then(()=>props);
}

const initPoap = async props => {
  return props.dispatch(poapOps.init())
    .then(()=>props);
}

const initVerification = async props => {
  return props.dispatch(verOps.init())
  .then(()=>props);
}

const start = () => (dispatch,getState) => {
  let state = getState();
  if(state.init.initComplete) {
    return;
  }
 
  return dispatch(_doStart());
}

const _doStart = () => (dispatch,getState) => {
  dispatch(Creators.initStart());
  let props = {
    dispatch,
    getState
  }

  return initStorage(props)
  .then(initWallet)
  .then(initPoap)
  .then(initVerification)
  .then(props => {
    dispatch(Creators.initSuccess());
  });
}

const reset = () => dispatch => {
  dispatch(Creators.reset());
}
 
export default {
  start,
  reset
}
