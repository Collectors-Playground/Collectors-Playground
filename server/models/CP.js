const { Pool } = require('pg');

const PG_URI =
  // 'postgres://wxpdjsrq:f60tWFPF0mawrs5Cr11q56iyXj-_U0h3@fanny.db.elephantsql.com/wxpdjsrq';
  'postgres://eamqqrpf:2tpSV7nWDqJc8aHaTOfipCkxDQtBXA-4@fanny.db.elephantsql.com/eamqqrpf';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
