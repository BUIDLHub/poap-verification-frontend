import {Creators, StepState} from './actions';
import {default as toastr} from 'Redux/toastr/operations';
import BHub from 'BUIDLHub';
import {ethers} from 'ethers';

const steps = [
    new StepState({
        id: "verifyToken",
        order: 0
    }),

    new StepState({
        id: "connectInstructions",
        order: 1,
        data: {
            inviteLink: null,
            authCommand: null
        }
    })
]

const init = () => async dispatch => {
    dispatch(Creators.initSuccess(steps))
}

const update = (step) => dispatch => {
    dispatch(Creators.update(new StepState(step)));
}

const runVerify = () => async (dispatch, getState) => {
    try {
        //TODO: get these through selection in REDUX store
        let tokenID = 7964;
        let eventID = 123;

        let s = {
            ...steps[0],
            working: true
        };
        //first get a nonce
        dispatch(Creators.update({
            ...s,
            status: "Getting nonce..."
        }));
        
        let nonce = await BHub.getNonce(tokenID);
        dispatch(Creators.update({
            ...s,
            status: "Waiting for token signature..."
        }));

        let w3 = getState().web3.provider;
        let sign = w3.getSigner();
        if(!sign) {
            dispatch(Creators.update({
                ...s,
                working: false,
                error: "Could not find signer from browser wallet"
            }));
            return;
        }

        let sig = await sign.signMessage(nonce);
        

        sig = ethers.utils.splitSignature(sig);

        dispatch(Creators.update({
            ...s,
            status: "Requesting verification via BUIDLHub..."
        }));

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
            dispatch(Creators.update({
                ...s,
                working: false,
                error: "You do not appear to be the token owner"
            }));
        } else {
            dispatch(Creators.update({
                ...s,
                working: false,
                completed: true,
                error: null,
                data: res
            }));
        }

    } catch (e) {
        console.log(e);
        dispatch(toastr.error("Problem running verification", e.message));
        dispatch(Creators.update(new StepState({
            ...steps[0],
            working: false,
            error: e.message
        })));
    }
}

export default {
    init,
    update,
    runVerify
}