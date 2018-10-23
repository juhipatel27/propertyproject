import {callApi} from "../services/Apicall";
import ApiConstant from '../services/Apiconstant'

export const ratedisplay=(Rate)=>{
    debugger;


    return callApi(ApiConstant.baseUrl+ApiConstant.seller+ApiConstant.Rate,'post',Rate,{})
        .then((res)=>{

            debugger;
            return Promise.resolve(res.data)

        }).catch((err)=>{
            debugger
            return Promise.reject(err)
        })

}
