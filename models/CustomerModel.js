var Sequelize = require('sequelize');
const db = require('../config/database');

const Customer = db.define('customer',{
    customer_id: { type: Sequelize.INTEGER, primaryKey: true },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    credit_card: Sequelize.TEXT,
    address_1: Sequelize.STRING,
    address_2: Sequelize.STRING,
    city: Sequelize.STRING,
    region: Sequelize.STRING,
    postal_code: Sequelize.STRING,
    country: Sequelize.STRING,
    shipping_region_id: Sequelize.STRING,
    day_phone: Sequelize.STRING,
    eve_phone: Sequelize.STRING,
    mob_phone: Sequelize.STRING

},{
    tableName: 'customer',
    timestamps:false
});
module.exports = Customer;