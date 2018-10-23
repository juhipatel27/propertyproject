import {callApi} from "../services/Apicall";
import ApiConstant from '../services/Apiconstant'
import {USER_DETAIL} from "./types";

export const registerUser=(user)=>{
        debugger;
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'post',user,{}).then((res)=>{
                debugger;

                dispatch({
                    type:USER_DETAIL,
                    payload:res.data
                })
            return Promise.resolve(res.data)
        }).catch((err)=>{
                debugger
            return Promise.reject(err)
        })
    }

}