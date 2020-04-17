import {connect} from 'react-redux';
import View from './MainContent';
import {default as verOps} from 'Redux/verification/operations';
import {withRouter} from 'react-router-dom';

const s2p = state => {
    let eventsByToken = state.poap.byTokenID;
    
    return {
        eventsByToken
    } 
} 

 const d2p = (dispatch,own) => { 

     return {
       goToBadge: (evt, tokenID) => {
           own.history.push("/mike/" + evt.id + "/" + tokenID);
       }
    }
} 

 export default withRouter(connect(s2p,d2p)(View))
