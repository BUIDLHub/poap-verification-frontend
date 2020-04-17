import {Creators} from './actions';
import {default as toastr} from 'Redux/toastr/operations';
import BHub from 'BUIDLHub';
import {ethers} from 'ethers';

const init = () => async dispatch => {
    
}

const update = (data) => dispatch => {
    dispatch(Creators.update(data));
}

const runVerify = (eventID, tokenID) => async (dispatch, getState) => {
    try {
        //let tokenID =  7964;
        //let eventID = 123;

        if(!tokenID) {
            return dispatch(Creators.failure("Missing token in request"));
        }
        if(!eventID) {
            return dispatch(Creators.failure("Missing event in request"));
        }

        dispatch(Creators.working(true));
        
        //first get a nonce
        dispatch(Creators.status( "Getting nonce..."));
        
        let nonce = await BHub.getNonce(tokenID);
        dispatch(Creators.status("Waiting for token signature..."));

        let w3 = getState().web3.provider;
        let sign = w3.getSigner();
        if(!sign) {
            dispatch(Creators.failure("Could not find signer from browser wallet"));
            return;
        }

        let sig = await sign.signMessage(nonce);
        sig = ethers.utils.splitSignature(sig);

        dispatch(Creators.status("Requesting verification via BUIDLHub..."));

        let res = await BHub.verifyOwnership({
            tokenID,
            eventID,
            nonce,
            sig_r: sig.r,
            sig_s: sig.s,
            sig_v: sig.v,
            sig_recoveryParam: sig.recoveryParam
        });
        
        if(!res.inviteLink) {
            dispatch(Creators.failure("You do not appear to be the token owner"));
        } else {
            dispatch(Creators.update(res));
        }

    } catch (e) {
        console.log(e);
        dispatch(toastr.error("Problem running verification", e.message));
        dispatch(Creators.failure(e));
    }
}

export default {
    init,
    update,
    runVerify
}