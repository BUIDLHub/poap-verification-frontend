import {connect} from 'react-redux';
import View from './Instructions';
import copy from 'copy-to-clipboard';
import {default as toastr} from 'Redux/toastr/operations';

const s2p = state => {
    let ver = state.verification;
    return {
        loading: ver.loading,
        status: ver.status,
        error: ver.error,
        inviteLink: ver.inviteLink,
        authCommand: ver.authCommand
    }  
} 

 const d2p = dispatch => { 
     return {
        copyToClipboard: text => {
            copy(text);
            dispatch(toastr.info("Copied to clipboard"))
        }
    } 
} 

 export default connect(s2p,d2p)(View)