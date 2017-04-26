const { Map } = require('immutable')

export function firstUser(state=null,action){
    switch(action.type){
        case 'SET_FIRST_USER':
            return action.user;
        default:
            return state;
    }
}
export function secondUser(state=null,action){
    switch(action.type){
        case 'SET_SECOND_USER':
            return action.user;
        default:
            return state;
    }
}
export function compareLoading(state=false,action){
    switch(action.type){
        case 'COMPARE_LOADING':
            return action.payload;
        default:
            return state;
    }
}
export function firstUserData(state=Map({ total_tokens:0, ifs:0, fors:0 ,commits:0}),action){
      var prev_total_tokens= state.get('total_tokens');
      var prev_ifs=state.get('ifs');
           var prev_fors=state.get('fors');
           var prev_commits=state.get('commits');
    switch(action.type){
        case 'RESET_FIRST_USER_DATA':
            return Map({ total_tokens:0, ifs:0, fors:0 ,commits:0});
        case 'AGG_FIRST_USER_COMMITS':
           var next_commits=prev_commits+action.payload;
          return Map({total_tokens:prev_total_tokens,ifs:prev_ifs,fors:prev_fors,commits:next_commits});
        case 'AGG_FIRST_USER_TOKENS':
            var next_total_tokens=prev_total_tokens+action.payload.total_tokens;
            var next_ifs=prev_ifs+action.payload.ifs;
            var next_fors=prev_fors+action.payload.fors;
            return Map({total_tokens:next_total_tokens,ifs:next_ifs,fors:next_fors,commits:prev_commits});
           
        default:
            return state;
    }
}
export function secondUserData(state=Map({ total_tokens:0, ifs:0, fors:0 ,commits:0}),action){
      var prev_total_tokens= state.get('total_tokens');
      var prev_ifs=state.get('ifs');
           var prev_fors=state.get('fors');
           var prev_commits=state.get('commits');
    switch(action.type){
        case 'RESET_SECOND_USER_DATA':
            return Map({ total_tokens:0, ifs:0, fors:0 ,commits:0});
        case 'AGG_SECOND_USER_COMMITS':
           var next_commits=prev_commits+action.payload;
          return Map({total_tokens:prev_total_tokens,ifs:prev_ifs,fors:prev_fors,commits:next_commits});
        case 'AGG_SECOND_USER_TOKENS':
            var next_total_tokens=prev_total_tokens+action.payload.total_tokens;
            var next_ifs=prev_ifs+action.payload.ifs;
            var next_fors=prev_fors+action.payload.fors;
            return Map({total_tokens:next_total_tokens,ifs:next_ifs,fors:next_fors,commits:prev_commits});
           
        default:
            return state;
    }
}