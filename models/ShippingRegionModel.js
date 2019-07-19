var Sequelize = require('sequelize');
var fs = require('fs');

class User extends Model {}{
    User.init({
        customerId: { type: Sequelize.INTEGER, primaryKey: true },
        Name: Sequelize.STRING,
        mail: Sequelize.STRING,
        password: Sequelize.STRING,
        creditCard: Sequelize.TEXT,
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
    }, {modelName: 'project',timestamps:false })


}