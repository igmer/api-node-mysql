const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Customer = require('../models/CustomerModel');

router.get('/', (req, res) =>
    Customer.findAll()
        .then(customer => {
            console.log(customer);
            res.json({
                status: 200,
                data: customer
            })
        })
        .catch(err => console.log(err))
);


//add customer
router.post('/add_customer', (req, res) => {
    console.log(req.body);

    let {
        customer_id, name, email, password,
        credit_card,
        address_1, address_2, city, region, postal_code,
        country, shipping_region_id, day_phone, eve_phone,
        mob_phone
    } = req.body;
    Customer.create({
        customer_id, name, email, password,
        credit_card,
        address_1, address_2, city, region, postal_code,
        country, shipping_region_id, day_phone, eve_phone,
        mob_phone
    })
        .then(customer => res.json({
            status: 200,
            data: "Exito al registrar"
        }))
        .catch(err => res.json({
            status: 406,
            data: err
        }))
});

module.exports = router;