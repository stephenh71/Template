const PubSub = require('../helpers/pub_sub.js');
const dateFormat = require('dateformat');

class MerchantTable {
    constructor(container) {
        this.container = container;
    };

    bindEvents() {

        PubSub.subscribe('Merchants:data-loaded', (data) => {
            const merchants = data.detail;
            console.log(merchants);

            const inputMerchant = document.createElement("input");
            inputMerchant.setAttribute("type", "text");
            inputMerchant.setAttribute("id", "myInput");
            inputMerchant.setAttribute("placeholder", "Search for merchant....");
            this.container.appendChild(inputMerchant);

            const merchantTable = document.createElement("table");
            merchantTable.setAttribute("id", "myTable");
            this.container.appendChild(merchantTable);

            const tableRow = document.createElement("tr");
            merchantTable.setAttribute("class", "header");
            merchantTable.appendChild(tableRow);

            const quoteDateHeader = document.createElement("th");
            quoteDateHeader.style.width = "10%";
            quoteDateHeader.textContent = "Quote Date";
            tableRow.appendChild(quoteDateHeader);

            const quoteIdHeader = document.createElement("th");
            quoteIdHeader.style.width = "10%";
            quoteIdHeader.textContent = "Quote ID";
            tableRow.appendChild(quoteIdHeader);

            const nameHeader = document.createElement("th");
            nameHeader.style.width = "10%";
            nameHeader.textContent = "Name";
            tableRow.appendChild(nameHeader);

            const partnerHeader = document.createElement("th");
            partnerHeader.style.width = "10%";
            partnerHeader.textContent = "Partner";
            tableRow.appendChild(partnerHeader);

            const turnoverHeader = document.createElement("th");
            turnoverHeader.style.width = "10%";
            turnoverHeader.textContent = "Turnover";
            tableRow.appendChild(turnoverHeader);

            const statusHeader = document.createElement("th");
            statusHeader.style.width = "10%";
            statusHeader.textContent = "Status";
            tableRow.appendChild(statusHeader);

            const updateDateHeader = document.createElement("th");
            updateDateHeader.style.width = "10%";
            updateDateHeader.textContent = "Update Date";
            tableRow.appendChild(updateDateHeader);

            const deleteButtonHeader = document.createElement("th");
            deleteButtonHeader.style.width = "10%";
            deleteButtonHeader.textContent = "Delete";
            tableRow.appendChild(deleteButtonHeader);

            merchants.forEach(merchant => {

                const tableRow = document.createElement("tr");
                tableRow.setAttribute("id", "headerRow");
                merchantTable.appendChild(tableRow);

                const element = document.createElement("td");
                element.textContent = dateFormat(merchant.quoteDate, "dd mmmyy");
                tableRow.appendChild(element);

                const element2 = document.createElement("td");
                element2.textContent = merchant.quoteID;
                tableRow.appendChild(element2);

                const element3 = document.createElement("td");
                element3.textContent = merchant.name;
                tableRow.appendChild(element3);

                const element4 = document.createElement("td");
                element4.textContent = merchant.partner;
                tableRow.appendChild(element4);

                const element5 = document.createElement("td");
                element5.textContent = merchant.turnover;
                tableRow.appendChild(element5);

                const element6 = document.createElement("td");
                element6.textContent = merchant.status;
                tableRow.appendChild(element6);

                const element7 = document.createElement("td");
                element7.textContent = dateFormat(merchant.updateDate, "dd mmmyy");
                tableRow.appendChild(element7);

                const deleteButton = this.createDeleteButton(merchant._id);
                tableRow.appendChild(deleteButton);
            });

            inputMerchant.onkeyup = function() {
                // Declare variables
                var input, filter, table, tr, td, i;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                table = document.getElementById("myTable");
                tr = table.getElementsByTagName("tr");

                // Loop through all table rows, and hide those who don't match the search query

                for (i = 0; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[2];
                    if (td) {
                        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                        } else {
                            tr[i].style.display = "none";
                        };
                    };
                };
            };
        });
    };

    createDeleteButton(merchantId) {
        const button = document.createElement('button');
        button.classList.add('delete-btn');
        button.value = merchantId;

        button.addEventListener('click', (event) => {
            PubSub.publish('MerchantView:merchant-delete-clicked', event.target.value);
        });

        return button;
    };
};

module.exports = MerchantTable;