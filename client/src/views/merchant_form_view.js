const PubSub = require('../helpers/pub_sub.js')
const dateFormat = require('dateformat');

const MerchantFormView = function (form) {
  this.form = form;
};

MerchantFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

MerchantFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newmerchant = this.createmerchant(evt.target);
  PubSub.publish('MerchantFormView:merchant-submitted', newmerchant);
  evt.target.reset();
};

MerchantFormView.prototype.createmerchant = function (form) {
  const newMerchant = {
    date_quote: dateFormat(form.date_quote.value,"dd mmm yy"),
    mid: parseInt(form.mid.value),
    name: form.name.value,
    partner: form.partner.value,
    residual: parseInt(form.residual.value),
  };

  return newMerchant;
};

module.exports = MerchantFormView;
