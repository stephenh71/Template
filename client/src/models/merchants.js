const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Merchants = function (url) {
  this.url = 'http://localhost:3000/api/merchants';
  this.request = new Request(this.url);
};

Merchants.prototype.bindEvents = function () {
  PubSub.subscribe('MerchantView:merchant-delete-clicked', (evt) => {
    this.deleteMerchant(evt.detail);
  });

  PubSub.subscribe('MerchantFormView:merchant-submitted', (evt) => {
    this.postMerchant(evt.detail);
  })
};

Merchants.prototype.getData = function () {
  this.request.get()
    .then((merchants) => {
      PubSub.publish('Merchants:data-loaded', merchants);
    })
    .catch(console.error);
};

Merchants.prototype.postMerchant = function (merchant) {
  this.request.post(merchant)
    .then((merchants) => {
      PubSub.publish('merchants:data-loaded', merchants);
      console.log(merchants, merchant);
    })
    .catch(console.error);
};

Merchants.prototype.deleteMerchant = function (merchantId) {
  this.request.delete(merchantId)
    .then((merchants) => {
      PubSub.publish('Merchants:data-loaded', merchants);
    })
    .catch(console.error);
};

module.exports = Merchants;
