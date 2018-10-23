import {callApi} from "../services/Apicall";
import ApiConstant from '../services/Apiconstant'
import {SELLING_INSERT} from "./types";

export const sellingUser=(sell)=>{
    const data=new FormData();
    console.log("In action")
    console.log(sell.image[0])
    data.append('city',sell.city)
    data.append('location',sell.location)
    data.append('ptype',sell.ptype)
    data.append('Rate',sell.Rate)
    data.append('bedroom',sell.bedroom)
    data.append('bathroom',sell.bathroom)
    data.append('balconies',sell.balconies)
    data.append('description',sell.description)
    data.append('uid',sell.uid)
    data.append('buy',sell.buy)
    sell.image.map(obj=>{
        data.append('image',obj);
    });
    debugger;
        return callApi(ApiConstant.baseUrl+ApiConstant.seller,'post',data,{'Content-Type': 'multipart/form-data'})
            .then((res)=>{
            debugger;
            return Promise.resolve(res.data)

        }).catch((err)=>{
            debugger
            return Promise.reject(err)
        })
}

