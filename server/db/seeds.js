use shtest;
db.dropDatabase();

db.merchants.insertMany([
  {
    quoteID: 40123,
    quoteDate: '2018-07-09',
    name: "Sweat Guard",
    contact: "John Smith",
    email: "john@john.com",
    partner: "Fidelity",
    turnover: 10000,
    status: "live",
    updateDate: '2018-08-09',
    terminals: 2,
  },

  {
    quoteID: 40100,
    quoteDate: '2018-03-12',
    name: "Motts Travel",
    contact: "Bob Adams",
    email: "bob@bob.com",
    partner: "Fidelity",
    turnover: 200000,
    status: "live",
    updateDate: '2018-08-14',
    terminals: 12,
  },

  {
    quoteID: 39400,
    quoteDate: '2016-03-12',
    name: "Cool Japan",
    contact: "Bryan Eno",
    email: "bob@bob.com",
    partner: "Card Cutters",
    turnover: 5000,
    status: "live",
    updateDate: '2016-08-14',
    terminals: 0,
  }

]);
