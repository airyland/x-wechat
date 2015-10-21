// sync from wechat server
// @todo 当用户更新头像后，原有url失效的处理
module.exports = Member;
var MEMBER = require('./memberModel');
// 异步任务
var kue = require('kue');

function Member(uid, group) {

}

var proto = Member.prototype;

// 根据openid获取资料
proto.getMemberInfoByOpenId = function(openid, appid) {

};

proto.isMember = function(group, appid) {

};

// 添加或者更新
// 在用户subscribe或者unsubscribe时触发

proto.addMember = function(openid, accountId) {

};

// 取关
proto.removeMember = function(openid, accountId) {

};
/****************** Tag *********************/

proto.setTag = function(tag, accountId) {

};

// 设置为无效
proto.removeTag = function(tag, accountId) {

};

// 用于未关注用户授权时打tag，当关注后可以推送消息直接进入活动，简化流程
proto.hasTag = function(tag, accountId) {

};

/******************* Message ***********************/

proto.sendMessage = function() {

};
