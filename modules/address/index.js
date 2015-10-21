// 保存地址
// 1.一个用户可以有多个地址
// 2.活动地址不采用ref而是每次活动保存一次详细地址

module.exports = Address;

function Address(group) {
  this.group = group;
}

var proto = Address.prototype;

// get address list
proto.getAddressList = function(uid) {

};

// update address
proto.updateAddress = function(uid, addressId, data) {

};

// delete address
proto.deleteAddress = function(uid, addressId) {

};

// create address
proto.addAddress = function(uid, data) {

};
