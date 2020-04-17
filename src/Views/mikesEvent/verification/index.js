import {connect} from 'react-redux';
import View from './Verify';
import {default as verOps} from 'Redux/verification/operations';

const s2p = state => {
    let ver = state.verification;
    return {
        loading: ver.loading,
        status: ver.status,
        error: ver.error
    } 
} 

 const d2p = (dispatch,own) => { 
     let eventID = own.eventID;
     let tokenID = own.tokenID;
     return {
         doVerify: () => {
            return dispatch(verOps.runVerify(eventID, tokenID));
         }
    } 
} 

 export default connect(s2p,d2p)(View)