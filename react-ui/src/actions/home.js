import {getURL} from '../utilities/xmlhttp.js';
import GitHub from 'github-api';

export function setActiveUser(user){
    return{
        type:"SET_ACTIVE_USER",
        user
    }
}
function createFormData(values) {
    values = input || {};
    var data = new FormData();
    for (var property in values) {
        //console.log(property);
        if (values.hasOwnProperty(property)) {
            var value = values[property];
            if (value instanceof Array) {
                for (var i = 0, l = value.length; i < l; i++) {
                    data.append(property, value[i]);
                }
            }
            else {
                data.append(property, value);
            }
        }
        return data;
    }
}
export function userFetchData(input,id_user,callback) {
    return (dispatch) => {
        dispatch(homeLoading(true))
        var data=createFormData({searched:input,id_user});
        fetch('/db',{method:'POST', body:data})
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
       console.log(response);})
      .catch(e => {
        console.log(e);
      })
    
        var gh = new GitHub();
        var name = gh.getUser(input);
        name.getProfile()
        .then(function({data: profile}){
            name.listRepos()
                .then(function({data: repos}){
                    getURL(profile.followers_url)
                    .then(function(res){
                        var followers=JSON.parse(res);
                        dispatch(addUser({name,profile,repos,followers}));
                        dispatch(homeLoading(false));
                    })
                })    
        },function(error){
            dispatch(homeError("GET_USER_ERROR"));
            callback();
            dispatch(homeLoading(false));
        })

    }
}
export function homeLoading(bool){
    return{
        type: "HOME_LOADING",
        bool
    }
}
export function homeError(error){
    return{
        type: "HOME_ERROR",
        error
    }
}
export function addUser(user){
    return{
        type:"ADD_USER",
        user
    }
}