import {Creators} from './actions';
import {default as web3Ops} from 'Redux/web3/operations';
import {default as poapOps} from 'Redux/poap/operations';

const initWallet = async props => {
  return props.dispatch(web3Ops.init())
      .then(()=>props);
}

const initPoap = async props => {
  return props.dispatch(poapOps.init())
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

  return initWallet(props)
  .then(initPoap)
  .then(props => {
    dispatch(Creators.initSuccess());
  });
  
  /*
  return initStorage(props)
  
        .then(initAccount)
        .then(initSettings)
        .then(initSubscribe)
        .then(initContracts)
        .then(initPlugins)
        .then(initTriggers)
        .then(initPluginActions)
        .then(initCoreExtensions)
        .then(initApps)
        .then(initFlows)
        .then(initTemplates)
        .then(initFeatures)
        .then(initMetrics)
        .then(()=>{
          dispatch(Creators.initSuccess());
        })
        .catch(e=>{
          console.log(e);
          dispatch(Creators.failure(e));
        });
        */
}

const reset = () => dispatch => {
  dispatch(Creators.reset());
}
 
export default {
  start,
  reset
}
