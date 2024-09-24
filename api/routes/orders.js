const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');

router.get('/', (req,res,next) => {
    res.status(200).json({ message: 'Orders were fetched' });
});

router.post('/', (req,res,next) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        product: req.body.productId
    });
    order.save().exec().then(result => {
        console.log(result);
        res.status(201).json({ message: 'Order was created', order: result });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});

router.get('/:orderId', (req,res,next) => {
    res.status(200).json({ message: 'Order with id'+ req.params.orderId +'was fetched' });
});

router.patch('/:orderId', (req,res,next) => {
    res.status(200).json({ message: 'Order with id'+ req.params.orderId +'was updated' });
});

router.delete('/:orderId', (req,res,next) => {
    res.status(200).json({ message: 'Order with id'+ req.params.orderId +'was deleted' });
});

module.exports = router;