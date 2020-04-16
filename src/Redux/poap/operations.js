import {Creators} from './actions';
import {default as toastr} from 'Redux/toastr/operations';
import Client from './Client';

const init = () => async (dispatch, getState) => {
    try {
        let acct = getState().web3.account;
        if(acct) {
            dispatch(Creators.working(true));
            let events = await Client.getEvents(getState().web3.account);
            if(events) {
                dispatch(Creators.initSuccess(events));
            } else {
                dispatch(Creators.working(false));
            }
        }
    } catch (e) {
        console.log(e);
        dispatch(Creators.failure(e));
        dispatch(toastr.error("Problem initializing poap"));
    }
}

export default {
    init
}