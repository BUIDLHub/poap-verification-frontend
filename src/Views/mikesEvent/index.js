import {connect} from 'react-redux';
import View from './MikeEvent';
import _ from 'lodash';

const s2p = state => {
    let steps = _.values(state.verification.steps);
    steps.sort((a, b)=>a.order - b.order);

    return {
        steps
    } 
} 

 const d2p = dispatch => { 
     return {

    } 
} 

 export default connect(s2p,d2p)(View)