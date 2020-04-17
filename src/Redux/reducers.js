import { combineReducers } from 'redux';
import {default as init} from './init/reducers';
import {default as web3} from './web3/reducers';
import {default as poap} from './poap/reducers';
import {default as storage} from './storage/reducers';
import {default as verification} from './verification/reducers';


/**
 * Collection of all dashboard state tree reducers
 */
export default combineReducers({
  storage,
  init,
  web3,
  poap,
  verification
});
