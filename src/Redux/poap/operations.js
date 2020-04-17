import {Creators} from './actions';
import {default as toastr} from 'Redux/toastr/operations';
import Client from './Client';
import * as DBNames from 'Redux/storage/DBNames';

const init = () => async (dispatch, getState) => {
    try {
        let acct = getState().web3.account;
        if(acct) {
            dispatch(Creators.working(true));
            let events = await Client.getEvents(getState().web3.account);
            if(events) {
                //append additional metadata if the event has already been 
                //verified and stored locally
                let storage = getState().storage.instance;
                for(let i=0;i<events.length;++i) {
                    let e = events[i];
                    let key = "" + e.id;
                    let rec = await storage.read({
                        database: DBNames.Events,
                        key
                    });
                    if(rec) {
                        e.verification = rec;
                    }
                }
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