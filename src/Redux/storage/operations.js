import {Creators} from './actions';
import DB from 'buidl-storage';

const init = () => async (dispatch) => {
    let db = new DB({
        dbPrefix: 'poap-verification-'
    });
    dispatch(Creators.initSuccess(db));
}


export default {
    init
}