const PubSub = require('../helpers/pub_sub.js');
const MerchantView = require('./merchant_view.js');

const MerchantsGridView = function (container) {
  this.container = container;
};

MerchantsGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Merchants:data-loaded', (evt) => {
    this.render(evt.detail);
  });
};

MerchantsGridView.prototype.render = function (merchants) {
  this.container.innerHTML = '';
  const merchantView = new MerchantView(this.container);
  merchants.forEach((merchant) => merchantView.render(merchant));
};

module.exports = MerchantsGridView;
