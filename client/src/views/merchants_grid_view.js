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

MerchantsGridView.prototype.render = function (customers) {
  this.container.innerHTML = '';
  const merchantView = new MerchantView(this.container);
  customers.forEach((customer) => merchantView.render(customer));
};

module.exports = MerchantsGridView;
