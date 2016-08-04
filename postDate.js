'use strict'
const request = require('request');

function postFunc(err, httpResponse) {
    if (!err && httpResponse.statusCode == 200) {
        //console.log('投票成功!');
    } else {
        console.log('投票失败!');
    }
}

module.exports.postDate = (n) => {
    for (let i = 1; i <= n; i++) {
        request.post('http://s1.eqxiu.com/eqs/scene/counter', { form: { sceneId: '52759457', fieldId: '556233132107' } },
            postFunc);
    }
}
