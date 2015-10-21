var mongoose = require('mongoose');
var schema = {
  appid: String, //公众号appid
  subscribe: Date, // 接口返回s时间，要转换
  subscribe_time: Date,
  unsubscribe_time: Date, //取关时间
  openid: String,
  nickname: String,
  sex: Number,
  city: String,
  country: String
  province: String,
  language: String,
  headimgurl: String,
  unionid: String,
  remark: String,
  groupid: Number
};

module.exports = mongoose.model('members', schema);
