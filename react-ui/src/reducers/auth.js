import {postURL} from '../utilities/xmlhttp.js';
export function oAuth(state=null,action){
    switch(action.type){
        case 'ROUTER_LOCATION_CHANGED':
            if(action.payload.query&&action.payload.query.code){
                var code = action.payload.query.code;
                console.log(code);
                postURL("https://github.com/login/oauth/access_token",{code:code,client_id:"57fcead5a30d4f62013d",client_secret:"f01c13b5c8188b7569958cf348333ae4ce078a37"}).then((res)=>{
                    console.log(res)});
                    return code;
            }
            return state;
        default:
            return state;
    }
}