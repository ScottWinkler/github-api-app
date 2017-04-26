export function setActiveUser(state=null,action){
    switch(action.type){
        case 'SET_ACTIVE_USER':
            return action.user;
        default:
            return state;
    }
}

export function addUser(state=[],action){
    switch(action.type){
        case 'ADD_USER':
            return [...state, action.user];
        default:
            return state;
    }
}
  
export function homeError(state=null,action){
    switch(action.type){
        case 'HOME_ERROR':
            return action.error;
        default:
            return state;
    }
}
export function homeLoading(state=false,action){
    switch(action.type){
        case 'HOME_LOADING':
            return action.bool;
        default:
            return state;
    }
}
export function id_user(state= Math.random().toString(36).substr(2, 9),action){
    return state;
}