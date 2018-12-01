const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

class Merchants {
    constructor(url) {
        this.url = 'http://localhost:3000/api/merchants';
        this.request = new Request(this.url);
    };

    bindEvents() {
        PubSub.subscribe('MerchantView:merchant-delete-clicked', (evt) => {
            this.deleteMerchant(evt.detail);
        });

        PubSub.subscribe('MerchantFormView:merchant-submitted', (evt) => {
            this.postMerchant(evt.detail);
        })
    };

    getData() {
        this.request.get()
            .then((merchants) => {
                PubSub.publish('Merchants:data-loaded', merchants);
                console.log(merchants);
            })
            .catch(console.error);
    };

    postMerchant(merchant) {
        this.request.post(merchant)
            .then((merchants) => {
                PubSub.publish('merchants:data-loaded', merchants);
                console.log(merchants, merchant);
            })
            .catch(console.error);
    };

    deleteMerchant(merchantId) {
        this.request.delete(merchantId)
            .then((merchants) => {
                PubSub.publish('Merchants:data-loaded', merchants);
            })
            .catch(console.error);
    };
};
module.exports = Merchants;