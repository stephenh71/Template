const PubSub = require('../helpers/pub_sub.js');

const MerchantView = function (container) {
  this.container = container;
};

MerchantView.prototype.render = function (merchant) {
  const merchantContainer = document.createElement('div');
  merchantContainer.id = 'merchant';

  const name = this.createHeading(merchant.name);
  merchantContainer.appendChild(name);

  const date_quote = this.createDetail('Quote date', merchant.date_quote);
  merchantContainer.appendChild(date_quote);

  const mid = this.createDetail('MID', merchant.mid);
  merchantContainer.appendChild(mid);

  const partner = this.createDetail('Partner', merchant.partner);
  merchantContainer.appendChild(partner);

  const residual = this.createDetail('Residual', merchant.residual);
  merchantContainer.appendChild(residual);

  const deleteButton = this.createDeleteButton(merchant._id);
  merchantContainer.appendChild(deleteButton);

  this.container.appendChild(merchantContainer);
};

MerchantView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

MerchantView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

MerchantView.prototype.createDeleteButton = function (merchantId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = merchantId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('MerchantView:merchant-delete-clicked', evt.target.value);
  });

  return button;
};

module.exports = MerchantView;
