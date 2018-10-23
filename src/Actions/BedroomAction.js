import {callApi} from "../services/Apicall";
import ApiConstant from '../services/Apiconstant'

export const bedroomdisplay=(bedroom)=>{
    debugger;


    return callApi(ApiConstant.baseUrl+ApiConstant.seller+ApiConstant.bedroom,'post',bedroom,{})
        .then((res)=>{

            debugger;
            return Promise.resolve(res.data)

        }).catch((err)=>{
            debugger
            return Promise.reject(err)
        })

}
