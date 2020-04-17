import axios from 'axios';
import * as yup from 'yup';

const BASE_URL = "https://poap.buidlhub.com";
const VERIFY_URL = `${BASE_URL}/verify`;
const NONCE_URL = `${BASE_URL}/nonce`;


const _m = f => `BUIDLHub client missing ${f}`
const verificationSchema = yup.object({
    eventID: yup.number().required(_m("eventID")),
    tokenID: yup.number().required(_m("tokenID")),
    nonce: yup.string().required(_m("nonce")),
    sig_r: yup.string().required(_m("sig_r")),
    sig_s: yup.string().required(_m("sig_s")),
    sig_v: yup.string().required(_m("sig_v")),
    sig_recoveryParam: yup.number().min(0).required(_m("sig_recoveryParam"))
});

export default class BHub {

    static getNonce = async (tokenID) => {
        try {
            let r = await axios.post(NONCE_URL, {tokenID});
            if(r.data.error) {
                console.log("Problem getting nonce from BUIDLHub", r.data.error);
                return null;
            }
            return r.data.nonce;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    static verifyOwnership = async (props) => {
        verificationSchema.validateSync(props);
        let {nonce, eventID, tokenID, sig_r, sig_v, sig_s, sig_recoveryParam} = props;
        try {
            let r = await axios.post(VERIFY_URL, {nonce, eventID, tokenID, sig_r, sig_v, sig_s, sig_recoveryParam});
            if(r.data.error) {
                throw new Error(r.data.error);
            }
            return r.data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}