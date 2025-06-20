const Order = require('../models/order.model')

exports.getAllOrder = async () => {
    return await Order.find();
};

exports.getOrderByOrderCode = async (value) => {
    const order = await Order.find({
        orderCode: { $regex: value, $options: 'i' }
    })
    return order;
}

exports.createOrder = async (orderData) => {
    const {
        orderCode,
        books,
        totalAmount,
    } = orderData

    const newOrder = new Order({
        orderCode,
        books,
        totalAmount,
    })

    return await newOrder.save();
}

exports.acceptOrder = async () => {
    return await Order.updateOne({}, {
        $set: {
            status: 1,
            processedAt: new Date()
        }
    },
        { new: true }
    )
}