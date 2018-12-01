const PubSub = require('../helpers/pub_sub.js');

class MerchantView {
    constructor(container) {
        this.container = container;
    };

    render(merchant) {
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

    createHeading(textContent) {
        const heading = document.createElement('h3');
        heading.textContent = textContent;
        return heading;
    };

    createDetail(label, text) {
        const detail = document.createElement('p');
        detail.textContent = `${label}: ${text}`;
        return detail;
    };

    createDeleteButton(merchantId) {
        const button = document.createElement('button');
        button.classList.add('delete-btn');
        button.value = merchantId;

        button.addEventListener('click', (evt) => {
            PubSub.publish('MerchantView:merchant-delete-clicked', evt.target.value);
            console.log(evt.target.value);
        });

        return button;
    };
};
module.exports = MerchantView;