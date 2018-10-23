import {USER_DETAIL} from '../Actions/types';

const INTIAL_STATE={
       userDetail: {email:'',
             password:'',
             name:'',
            phone:'',
             uid:''}
};

export default (state=INTIAL_STATE,action)=> {
    switch (action.type) {
        case USER_DETAIL:
            return {...state, userDetail: action.payload}
        default:
            return state;
    }
}
