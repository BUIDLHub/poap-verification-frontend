import {connect} from 'react-redux';
import View from './Verify';
import {default as verOps} from 'Redux/verification/operations';

const s2p = state => {
    return {
    } 
} 

 const d2p = dispatch => { 
     return {
         doVerify: () => {
            return dispatch(verOps.runVerify());
         }
    } 
} 

 export default connect(s2p,d2p)(View)