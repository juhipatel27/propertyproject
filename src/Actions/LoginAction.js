import {callApi} from "../services/Apicall";
import ApiConstant from '../services/Apiconstant'
import {USER_DETAIL} from "./types";

export const loginUser=(user)=>{
    debugger;
    return(dispatch,getState)=>{
        console.log(ApiConstant.baseUrl+ApiConstant.signUp+ApiConstant.Login);
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp+ApiConstant.Login,'post',user,{}).then((res)=>{
            console.log(res.data.error)
            if(res.data.error === "invalid"){
               debugger
                return Promise.reject(res.data.error)

            }else {
                debugger;

                dispatch({
                    type: USER_DETAIL,
                    payload:res.data

                })
            }
            return Promise.resolve(res.data)
        }).catch((err)=>{
            debugger
            return Promise.reject(res.data.error)
        })
    }

}