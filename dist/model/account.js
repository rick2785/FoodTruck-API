'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passportLocalMongoose = require('passport-local-mongoose');

var _passportLocalMongoose2 = _interopRequireDefault(_passportLocalMongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var Account = new Schema({
  email: String,
  password: String
});

Account.plugin(_passportLocalMongoose2.default);
module.exports = _mongoose2.default.model('Account', Account);
//# sourceMappingURL=account.js.map