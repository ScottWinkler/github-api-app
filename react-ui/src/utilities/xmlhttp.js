function getURL(url) {
    return new Promise(function (succeed, fail) {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.addEventListener("load", function () {
            if (req.status < 400) succeed(req.responseText);
            else fail(new Error("Request failed: " + req.statusText));
        });
        req.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        req.send(null);
    });
}
export {getURL};



function postURL(url, values) {
    return new Promise(function (succeed, fail) {
        values = values || {};
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
        }

        var req = new XMLHttpRequest();
        req.open("POST", url, true);
        req.addEventListener("load", function () {
            if (req.status < 400){
            succeed(req.responseText);
            } 
            else fail(new Error("Request failed: " + req.statusText));
        });
        req.addEventListener("error", function () {
            fail(new Error("Network error"));
        });
        req.send(data);

    });
}

export {postURL};
