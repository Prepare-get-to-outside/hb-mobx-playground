import { observable } from 'mobx';

//state model 
const countObject = observable({
    num1: 0,
    increase(){
        this.num1++;
    },
    decrease(){
        this.num1--;
    }
})

export default countObject;