use shtest;
db.dropDatabase();

db.merchants.insertMany([
  {
    ID: 40987657,
    name: "Sweat Guard",
    partner: "Fidelity",
    date_quote: '2018-10-09',
    residual: 60
  },
  {
    ID: 40980000,
    name: "Motts Travel",
    partner: "Fidelity",
    date_quote: '2018-07-09',
    residual: 100
  },

]);
