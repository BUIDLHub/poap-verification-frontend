
import { toast /*,Flip*/ } from 'react-toastify';

const info = msg => dispatch => {
    return toast(msg, {
        autoClose: 3000,
        type: toast.TYPE.INFO,
        closeButton: false,
        newestOnTop: true
      })
}

const warn = msg => dispatch => {
    return toast(msg, {
        autoClose: 3000,
        type: toast.TYPE.WARNING,
        closeButton: false,
        newestOnTop: true
      })
}

const success = msg => dispatch => {
    return toast(msg, {
        autoClose: 3000,
        type: toast.TYPE.SUCCESS,
        closeButton: false,
        newestOnTop: true
    })
}

const error = msg => dispatch => {
    return toast(msg, {
        autoClose: 10000,
        type: toast.TYPE.ERROR,
        closeButton: true,
        newestOnTop: true
      })
}

export default {
    info, warn, error,success
}