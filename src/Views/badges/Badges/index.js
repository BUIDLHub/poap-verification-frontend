import {connect} from 'react-redux';
import View from './Badges';
import {withRouter} from 'react-router-dom';
import {default as verOps} from 'Redux/verification/operations';

const s2p = state => {
    return {
        account: state.web3.account,
        loading: state.poap.loading,
        eventsByToken: state.poap.byTokenID
    } 
} 

 const d2p = (dispatch,own) => { 
     return {
        goToBadge: (evt, tokenID) => {
            dispatch(verOps.clear());
            own.history.push(`/verify/${evt.id}/${tokenID}`);
        }
    } 
} 

 export default withRouter(connect(s2p,d2p)(View))