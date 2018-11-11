const PubSub = require('../helpers/pub_sub.js');

const SelectMerchant = function (container) {
    this.container = container;
};

SelectMerchant.prototype.bindEvents = function () {

  const inputMerchant = document.createElement("input");
  inputMerchant.setAttribute("type","text");
  inputMerchant.setAttribute("id", "myInput");
  inputMerchant.setAttribute("placeholder", "Search for merchant...");
  this.container.appendChild(inputMerchant);

  const merchantTable = document.createElement("table");
  merchantTable.setAttribute("id", "myTable");
  this.container.appendChild(merchantTable);

  const tableRow = document.createElement("tr");
  merchantTable.setAttribute("class", "header");
  merchantTable.appendChild(tableRow);

  const nameHeader = document.createElement("th");
  nameHeader.style.width = "60%";
  nameHeader.textContent = "Name";
  tableRow.appendChild(nameHeader);

  const countryHeader = document.createElement("th");
  countryHeader.style.width = "40%";
  countryHeader.textContent = "Country";
  tableRow.appendChild(countryHeader);

  const tableRow2 = document.createElement("tr");
  merchantTable.appendChild(tableRow2);

  const name = document.createElement("td");
  name.textContent = "Alfreds Futterkiste";
  tableRow2.appendChild(name);

  const country = document.createElement("td");
  country.textContent = "Germany";
  tableRow2.appendChild(country);

  const tableRow3 = document.createElement("tr");
  merchantTable.appendChild(tableRow3);

  const name2 = document.createElement("td");
  name2.textContent = "Island Trading";
  tableRow3.appendChild(name2);

  const country2 = document.createElement("td");
  country2.textContent = "UK";
  tableRow3.appendChild(country2);

  const tableRow4 = document.createElement("tr");
  merchantTable.appendChild(tableRow4);

  const name3 = document.createElement("td");
  name3.textContent = "Berglunds snabbkop";
  tableRow4.appendChild(name3);

  const country3 = document.createElement("td");
  country3.textContent = "Sweden";
  tableRow4.appendChild(country3);

  const tableRow5 = document.createElement("tr");
  merchantTable.appendChild(tableRow5);

  const name4 = document.createElement("td");
  name4.textContent = "Koniglich Essen";
  tableRow5.appendChild(name4);

  const country4 = document.createElement("td");
  country4.textContent = "Germany";
  tableRow5.appendChild(country4);

  inputMerchant.onkeyup = function(){
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        };
      };
    };
  };
};
module.exports = SelectMerchant;
