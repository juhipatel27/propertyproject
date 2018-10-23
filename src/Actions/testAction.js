import {callApi} from "../services/Apicall";
import ApiConstant from '../services/Apiconstant'

export const displayUser2=(selldetail)=>{
    debugger;


    return callApi(ApiConstant.baseUrl+ApiConstant.seller+ApiConstant.search,'post',selldetail,{})
        .then((res)=>{

            debugger;
            return Promise.resolve(res.data)

        }).catch((err)=>{
            debugger
            return Promise.reject(err)
        })

}
