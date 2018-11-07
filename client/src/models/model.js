const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Model = function () {
  this.internalRequest = new Request('/api/merchants');
};
