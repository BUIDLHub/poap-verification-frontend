import {connect} from 'react-redux';
import View from './VerifyEvent';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';

const s2p = (state,own) => {
    let eid = own.match.params.eventID;
    let tid = own.match.params.tokenID;

    if(!eid) {
        return {}
    }
    if(!tid) {
        return {}
    }
    
    if(!state.poap) {
        return {};
    }

    let event = state.poap.byTokenID[tid-0];
    if(!event) {
        return {}
    }

    let ver = state.verification;
    return {
        event,
        tokenID: tid,
        loading: ver.loading,
        status: ver.status,
        error: ver.error,
        inviteLink: ver.inviteLink,
        authCommand: ver.authCommand
    } 
} 

 const d2p = dispatch => { 
     return {
        
    } 
} 

 export default withRouter(connect(s2p,d2p)(View));