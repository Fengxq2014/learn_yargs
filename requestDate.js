'use strict'
const request = require('request');
const _ = require('lodash');

const url = "http://s1.eqxiu.com/eqs/scene/counter/values?sceneId=52759457&fieldIds=55629006292%2C352544811%2C55628455361%2C55616572961%2C55623913260%2C556233132107%2C9107582991%2C55616796725%2C2566006331%2C55625931086%2C7757361180%2C55624260874%2C55617485510%2C55626501562%2C1981355588%2C55628276973%2C55626119240%2C55628672160%2C55629191326%2C55629612679%2C55616286071%2C9048866244%2C761369311%2C55626353614%2C55662201577%2C55629782674";

function requestFunc(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('请求成功!');
        try {
            const req = JSON.parse(body);
            let maxId = 0,
                maxNum = 0;
            _.map(req.map, function(Num, Id) {
                if (+Num > +maxNum) {
                    maxNum = +Num;
                    maxId = Id;
                }
            });
            console.log(`最多票数:${maxNum},李海霞票数:${req.map[556233132107]}`);
        } catch (e) {
            console.log('请求数据有误!');
        }
    } else {
        console.log('请求失败!');
    }
}

module.exports.requestDate = () => { request(url, requestFunc) };
