import { combineReducers } from 'redux';
import {default as init} from './init/reducers';
import {default as web3} from './web3/reducers';
import {default as poap} from './poap/reducers';


/**
 * Collection of all dashboard state tree reducers
 */
export default combineReducers({
  init,
  web3,
  poap
});
