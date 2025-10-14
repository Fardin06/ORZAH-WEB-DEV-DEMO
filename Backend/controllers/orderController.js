import Order from "../models/orderModel.js";
import Product from "../models/productModel.js";

// NOTE: For demo only — authentication middleware not required yet (can be added)
export const createOrder = async (req, res) => {
  try {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice = 0,
      shippingPrice = 0,
      taxPrice = 0,
      totalPrice = 0,
      userId
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    // Reduce stock for ordered products (basic)
    for (const item of orderItems) {
      if (item.product) {
        const prod = await Product.findById(item.product);
        if (prod) {
          prod.countInStock = Math.max(0, (prod.countInStock || 0) - (item.quantity || 1));
          await prod.save();
        }
      }
    }

    // Mock payment result for certain methods
    const paymentResult = {
      id: `PAY_${Date.now()}`,
      status: paymentMethod === "cod" ? "pending" : "paid",
      update_time: new Date().toISOString(),
      email_address: req.body.payerEmail || ""
    };

    const order = await Order.create({
      user: userId || null,
      orderItems,
      shippingAddress,
      paymentMethod,
      paymentResult,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      isPaid: paymentResult.status === "paid",
      paidAt: paymentResult.status === "paid" ? new Date() : null,
      status: paymentResult.status === "paid" ? "Confirmed" : "Processing"
    });

    res.status(201).json({ message: "Order created", order });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email").populate("orderItems.product", "name image price");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate("user", "name email");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
