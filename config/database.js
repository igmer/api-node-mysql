const Sequelize = require('sequelize');
const fs = require('fs');
module.exports = new Sequelize(
    'turin','user@db','123',{
        host: 'ig.mysql.database.azure.com',
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                ca: fs.readFileSync('./BaltimoreCyberTrustRoot.crt.pem'),
            }
        }
    }
);