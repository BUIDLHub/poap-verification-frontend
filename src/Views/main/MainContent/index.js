import {connect} from 'react-redux';
import View from './MainContent';
import {default as initOps} from 'Redux/init/operations';

const s2p = state => {
    let eventsByToken = state.poap.byTokenID;
    let needsInit = !state.init.initComplete && !state.init.initStarted;
    return {
        eventsByToken,
        needsInit
    } 
} 

 const d2p = dispatch => { 
     return {
       runInit: () => {
           dispatch(initOps.start())
       }
    } 
} 

 export default connect(s2p,d2p)(View)
