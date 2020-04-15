import {Creators} from './actions';


const metricsOps = metricsRedux.operations;

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
  dispatch(Creators.initSuccess());
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
  DepManager.resetDeps();
  dispatch(Creators.reset());
}
 
export default {
  start,
  reset
}
