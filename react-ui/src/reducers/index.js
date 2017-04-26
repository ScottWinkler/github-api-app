import {combineReducers} from 'redux';
import {setActiveUser,addUser,homeError,homeLoading,id_user} from './home.js';
import {firstUser,firstUserData, secondUser,secondUserData,compareLoading} from './compare.js';
import {oAuth} from './auth.js';
const rootReducer=combineReducers({
    token: oAuth,
    id_user,
    users: addUser,
    activeUser: setActiveUser,
    loading:homeLoading,
    error: homeError,
    compare: combineReducers({
        first:firstUser,
        first_data:firstUserData,
        second:secondUser,
        second_data:secondUserData,
        loading:compareLoading
})
}

)
export default rootReducer;