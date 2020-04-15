import axios from 'axios';
import EventInfo from './EventInfo';

const BASE = "https://api.poap.xyz";
const EVENTS = `${BASE}/actions/scan`;

export default class Client {
    static getEvents = async account => {
        try {
            let url = `${EVENTS}/${account}`;
            let r = await axios.get(url);
            let evts = r.data || [];
            if(!Array.isArray(evts)) {
                let a = [evts];
                evts = a;
            }
            let byToken = {};

            evts.forEach(evt=> {
                let obj = new EventInfo(evt.event);
                byToken[evt.tokenId-0] = obj;
            });
            return byToken;

        } catch (e) {
            console.log("Problem retrieving events", e);
            throw e;
        }
    }
}