import {callApi} from "../services/Apicall";
import ApiConstant from '../services/Apiconstant'

export const citydisplay=(city)=>{
    debugger;


    return callApi(ApiConstant.baseUrl+ApiConstant.seller+ApiConstant.city,'post',city,{})
        .then((res)=>{

            debugger;
            return Promise.resolve(res.data)

        }).catch((err)=>{
            debugger
            return Promise.reject(err)
        })

}
