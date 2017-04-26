import {getURL} from '../utilities/xmlhttp.js';
var esprima=require('esprima');
var atob = require('atob');

export function setFirstUser(user){
    return{
        type:"SET_FIRST_USER",
        user
    }
}
export function setSecondUser(user){
    return{
        type:"SET_SECOND_USER",
        user
    }
}
export function aggregateFirstUserTokens(payload){
    return{
        type: "AGG_FIRST_USER_TOKENS",
        payload
    }
}
export function aggregateSecondUserTokens(payload){
    return{
        type: "AGG_SECOND_USER_TOKENS",
        payload
    }
}
export function resetFirstUserData(){
    return{
        type: "RESET_FIRST_USER_DATA",
        payload:null
    }
}
export function resetSecondUserData(){
    return{
        type: "RESET_SECOND_USER_DATA",
        payload:null
    }
}

export function aggregateFirstUserCommits(payload){
    return{
    type: "AGG_FIRST_USER_COMMITS",
    payload}
}

export function aggregateSecondUserCommits(payload){
    return{
    type: "AGG_SECOND_USER_COMMITS",
    payload}
}
export function compareLoading(bool){
    return{
    type: "COMPARE_LOADING",
    payload:bool
}
}
export function setUser(user, index) {
    var times = 0;
    var max_times = 50;
    return (dispatch) => {
        dispatch(compareLoading(true));
        if (index === 1) {
            dispatch(setFirstUser(user))
            dispatch(resetFirstUserData());
        } else {
            dispatch(setSecondUser(user))
            dispatch(resetSecondUserData());
        };
        var owner = user.profile.login;
        var repos = user.repos.map((repo) => { return repo.name });
        var authtoken = "?access_token=cd9c32832dbe6ca2b0a186ddb04bd1b50b098a82";

        repos.forEach((repo) => {
            //commit data
            getURL("https://api.github.com/repos/" + owner + "/" + repo + "/stats/participation" + authtoken).then((JSON_commit_count) => {
                var commit_count = JSON.parse(JSON_commit_count);
                 var total_commits = commit_count.owner.reduce((acc, cur) => acc + cur,0);
                if (index === 1) {
                    dispatch(aggregateFirstUserCommits(total_commits));
                } else {
                    dispatch(aggregateSecondUserCommits(total_commits));
                }
            }, (err) => { console.log(err); })
            if (times <= max_times) {
                getURL("https://api.github.com/repos/" + owner + "/" + repo + "/contents" + authtoken).then((JSON_root_contents) => {
                    var root_contents = JSON.parse(JSON_root_contents);
                    var dir_shas = root_contents.filter((content) => { return content.type === "dir" }).map((dir) => { return dir.sha });
                    dir_shas.forEach((sha) => {
                        if (times <= max_times) {
                            getURL("https://api.github.com/repos/" + owner + "/" + repo + "/git/trees/" + sha + "?recursive=1" + authtoken)
                                .then((JSON_dir_contents) => {
                                    var dir_contents = JSON.parse(JSON_dir_contents);
                                    var dir_urls = dir_contents.tree
                                        .filter((file) => { return file.path.match(/\.js/); })
                                        .map((file) => { return file.url; });
                                    dir_urls.forEach((url) => {
                                        if (times <= max_times) {
                                            times++;
                                            getURL(url + authtoken).then((JSON_blob) => {
                                                var blob = JSON.parse(JSON_blob);
                                                var bin = atob(blob.content);
                                                var tokens = esprima.tokenize(bin);
                                                var total_tokens = tokens.length;
                                                var ifs = tokens.filter((token) => { return token.type = "Keyword" && token.value === "if" }).length;
                                                var fors = tokens.filter((token) => { return token.type = "Keyword" && token.value === "for" }).length;
                                                if (index === 1) {
                                                    dispatch(aggregateFirstUserTokens({ total_tokens, ifs, fors }))
                                                } else {
                                                    dispatch(aggregateSecondUserTokens({ total_tokens, ifs, fors }))
                                                };
                                            }, (err) => { console.log(err); })
                                        }
                                    })
                                },
                                 (err) => { console.log(err); }
                                );
                        }

                    }
                    );
                }, (err) => { console.log(err); }

                )
            }
        }) 
        setTimeout( ()=>{dispatch(compareLoading(false))},5000);
       
    }
}
