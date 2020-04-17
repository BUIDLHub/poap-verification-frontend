import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    initStart: null,
    initSuccess: ['storage'],
    failure: ['error'],
    changeNetwork: ['storage']
}, {prefix: "storage."});
export {
    Types, Creators
}