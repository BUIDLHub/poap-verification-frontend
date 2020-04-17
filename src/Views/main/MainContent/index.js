import {connect} from 'react-redux';
import View from './MainContent';

const s2p = state => {
    let eventsByToken = state.poap.byTokenID;
    
    return {
        eventsByToken
    } 
} 

 const d2p = dispatch => { 
     return {
       
    } 
} 

 export default connect(s2p,d2p)(View)
