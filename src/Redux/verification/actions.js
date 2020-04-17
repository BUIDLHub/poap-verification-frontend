import {createActions} from 'reduxsauce';

const {
  Types,Creators
} = createActions({
  working: ['working'],
  status: ['status'],
  update: ['data'],
  failure: ['error']
}, {prefix: "verification."});

export {
  Types,
  Creators
}
