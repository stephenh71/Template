const MerchantFormView = require('./views/merchant_form_view.js')
const MerchantGridView = require('./views/merchants_grid_view.js');
const SelectMerchant = require('./views/merchant_list.js');
const Merchants = require('./models/merchants.js');

document.addEventListener('DOMContentLoaded', () => {
  const merchantsForm = document.querySelector('form#merchants-form');
  const merchantsFormView = new MerchantFormView(merchantsForm);
  merchantsFormView.bindEvents();

  const merchantsContainer = document.querySelector('div#customers');
  const merchantsGridView = new MerchantGridView(merchantsContainer);
  merchantsGridView.bindEvents();

  const merchantElement = document.querySelector('#main_container');
  const merchantSelect = new SelectMerchant(merchantElement);
  merchantSelect.bindEvents();

  const merchants = new Merchants();
  merchants.bindEvents();
  merchants.getData();

  });
