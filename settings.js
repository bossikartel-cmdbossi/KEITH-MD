/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/
const fs = require('fs-extra');
const path = require('path');
if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}
const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUXY+iSBT9L5V900wLCIhJJ4uIgIqKiGy7mYcSSii+rSpAnPjfJ3RPT8/D7mwvD6Q+7z33nHPrGyhKTNEKdWD6DVQEN5Chfsi6CoEpmNWXCyJgCELIIJiCyLhntZQaF9TBF34ycA+Hp+zs0twzgjMWlWSN+NHa5tVCfwaPIajqc4aD3wRcbrh0k0SVT/R4vZ1QH/vGSQrtdDsm+mlgBXzlSRga4ch5Bo8+IsQEF5FexShHBGYr1O0gJp+DP7GejBmaqMrmON/mK1ov5JDsscS565kRJkrSOoWNNhe48D4H/yicU4+7GcqcHNFk7i2Wg4FWJrx44f02Svcv6w52T9TlD9EbfIqjAoVWiAqGWfdp3l/WT0JrSLGos9Lhsek7vrW1w8jj7frs58lmpA6WC73UX2n6DO/JVbISteMVJVcmTsGNbb4SRcWDfMTp0Vz3zre820hxa/8KfEfevZL+H97TWX4a4Co+ucGGNPfIndn50rEtRacbKIyVM3OYRlhje8Hn4B/0NpCyU7ZzUZwuY9vK+EoQHT2kmdTUzCeum9BShrGTfsCHrCa/QzmOXpRL2UrLQKvtqIud9hwdStVE+4OjU2mlFJqYdLfgvjSC/S0/h8eVvL6Z4u4Yegbh107SmtJfm1k5HydR0DF/JYRq+/xaUYo6KwRT7jEEBEWYMgIZLot+TZaHAIaNiwKC2Cu7QL2388DS98ddVWV7W7g40dwQRLQ5q0mqnPx2sCmU5VwXL/ozGIKKlAGiFIUmpqwknY0ohRGiYPr31yEo0I296dZnE7ghuGBCmVfUVVbC8F3U900YBGVdMLcrAq0fIAKmo49lxBguItrTWBeQBDFukBZDRsH0AjOKfhaICArBlJEa/WxarQx73jeaxZ1GMwkMQf6qBw7BFPDiWFZkqf8LU07+k35p+7Cwqr4UiIEhKGB/GqzbP8AQZG93hLHAc9yI4zlBVrj+Wr/x+Am3jx4iBnFGwRRodjGOT6mh7/LTJKCGoeqRqkUq+Cjv3SZvOkjwBR3VdaxryO2srXiIN87Nw09Qeblp5R6OvXymZr6SLqznfwgCpqCKb3dozumg2Mm7M7mT6441yM5wcIWLPZ1x25QWJn+aGE1SPRm35rjjoDI513fb240CuZuZh9OTawZMXzexxR9tr5mpz322EDU4QL8mYwf3Oorjce1FS/V6Gfm14ZpitaCTmad07e2amNr1pezc6iZIgSj7gaF7W+2sCl7SRugEb+lKNfd2SYghLcx9SQxbc94M/NpA2Y+HC796qxeun14wen0Hfgj0n0K+Ae/9NnoMf4nx42X5l+6coTw3M0cb79UipXhee+ODZx+thm9827nqfr1YRs7y2JxmLng8vg5BlUF2KUkOpoDmZwiGgJR1716ruJS/yaSpnqVGkduXnUHK1I+OOOAcUQbzCkw5WVJkUZiIk7dTO1JWJqRxz8BRlq9eb+9OrSqXQfbeYEDtv9VcAI/vd1ILInsHAAA=';
const dev = process.env.OWNER_NUMBER || '254797654793';
const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 
const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,  
  dev,
  session,
};

//must run
