import {createActions} from 'reduxsauce';

const {
  Types,Creators
} = createActions({
  initSuccess: ['steps'],
  update: ['step']
}, {prefix: "verification."});


export class StepState {
    constructor(props) {
        this.id = props.id;
        this.status = props.status;
        this.order = props.order;
        this.completed = props.completed || false;
        this.error = props.error || null;
        this.loading = props.working || false;
        this.data = props.data || {}
    }
}

export {
  Types,
  Creators
}
