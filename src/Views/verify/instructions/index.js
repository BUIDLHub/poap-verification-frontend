import {connect} from 'react-redux';
import View from './NewInstructions'; //'./Instructions';
import copy from 'copy-to-clipboard';
import {default as toastr} from 'Redux/toastr/operations';

/**
 * [
    {
        inviteLink: "https://discord.com",
        authCommand: "!requestAccess 939399333",
        botName: "Dummy Bot",
        guildName: "My Server",
        roles: ['Role1', 'Role2']
    }
]
 */
const s2p = state => {
    let ver = state.verification;
    return {
        verifyComplete: ver.completed,
        loading: ver.loading,
        status: ver.status,
        error: ver.error,
        inviteLinks: ver.inviteLinks
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