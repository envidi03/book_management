const orderService = require('../services/order.service')

exports.getAllOrder = async (req, res) => {
    try {
        const order = await orderService.getAllOrder();
        res.status(200).json({
            data: order
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching order",
            error: error.message
        })
    }
}

exports.getOrderByOrderCode = async (req, res) => {
    const search = req.query.orderCode;
    try {
        const order = await orderService.getOrderByOrderCode(search)
        if (!order || order.length === 0) {
            return res.status(400).json({ message: "Order not found" })
        }

        return res.status(200).json({
            data: order
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching order by order code",
            error: error.message
        })
    }
}

exports.createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(200).json({
            message: "Create order successfully",
            data: order
        })
    } catch (error) {
        res.status(500).json({
            message: "Error creating book",
            error: error.message
        })
    }
}

