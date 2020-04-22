import {connect} from 'react-redux';
import View from './Badges';
import {withRouter} from 'react-router-dom';

const s2p = state => {
    return {
        loading: state.poap.loading,
        eventsByToken: state.poap.byTokenID
    } 
} 

 const d2p = (dispatch,own) => { 
     return {
        goToBadge: (evt, tokenID) => {
            own.history.push(`/verify/${evt.id}/${tokenID}`);
        }
    } 
} 

 export default withRouter(connect(s2p,d2p)(View))