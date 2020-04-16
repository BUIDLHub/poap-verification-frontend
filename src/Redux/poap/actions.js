import {createActions} from 'reduxsauce';

const {
  Types,Creators
} = createActions({
  working: ['working'],
  initSuccess: ['events'] ,
  failure: ['error']
}, {prefix: "poap."});

export {
  Types,
  Creators
}
