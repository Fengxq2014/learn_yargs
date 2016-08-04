#!/usr/bin/env node

'use strict'
const requestDate = require('./requestDate');
const _ = require('lodash').isUndefined;
const post = require('./postDate');
const watch = require('./watch');
const argv = require('yargs')
    .option('n', {
        alias: 'now',
        describe: '显示当前投票信息',
        boolean: true
    })
    .option('w', {
        alias: 'watch',
        describe: '监控',
        boolean: true
        //default: 1,
        //demand: true,
        //type:'number'
    })
    .option('t', {
        alias: 'toupiao',
        describe: '投票',
        type: 'number'
    })
    .usage('Usage: toupiao [options]')
    .example('hello -n', '当前最高票：1100，李海霞票：123')
    .help('h')
    .alias('h', 'help')
    .strict()
    .check(checkArg)
    .showHelpOnFail(true, '参数为空')
    .epilog('copyright 2015')
    .argv;

function checkArg(agv){
    return agv.n || agv.w || !_(agv.t);
}

if (argv.n) {
    console.log('稍等。。');
    requestDate.requestDate();
}

if (argv.t) {
    console.log('稍等。。');
    post.postDate(argv.t);
}

if(argv.w){
  console.log('监控开始');
  watch.watch(argv.w * 1000);
}
