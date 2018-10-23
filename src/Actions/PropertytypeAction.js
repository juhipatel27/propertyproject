import {callApi} from "../services/Apicall";
import ApiConstant from '../services/Apiconstant'

export const propertydisplay=(ptype)=>{
    debugger;

    return callApi(ApiConstant.baseUrl+ApiConstant.seller+ApiConstant.ptype,'post',ptype,{})
        .then((res)=>{

            debugger;
            return Promise.resolve(res.data)

        }).catch((err)=>{
            debugger
            return Promise.reject(err)
        })

}
