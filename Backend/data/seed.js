import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import connectDB from "../config/db.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

dotenv.config();

const sampleProducts = [
  {
    name: "ORZAH Runner Sneakers",
    image: "https://via.placeholder.com/600x600.png?text=ORZAH+Runner",
    description: "Lightweight runner sneakers with breathable mesh.",
    category: "Sneakers",
    price: 79.99,
    countInStock: 25
  },
  {
    name: "Classic White Shirt",
    image: "https://via.placeholder.com/600x600.png?text=Classic+White+Shirt",
    description: "Premium cotton shirt for casual and formal wear.",
    category: "Shirts",
    price: 39.99,
    countInStock: 50
  },
  {
    name: "Coloured Tee",
    image: "https://via.placeholder.com/600x600.png?text=Coloured+Tee",
    description: "Comfortable t-shirt with modern fit.",
    category: "T-Shirts",
    price: 19.99,
    countInStock: 100
  },
  {
    name: "Leather Belt",
    image: "https://via.placeholder.com/600x600.png?text=Leather+Belt",
    description: "Genuine leather belt, perfect for accessories.",
    category: "Accessories",
    price: 24.99,
    countInStock: 40
  }
];

const seed = async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    await User.deleteMany({});

    const hashed = await bcrypt.hash("admin123", 10);
    const adminUser = await User.create({
      name: "ORZAH Admin",
      email: "admin@orzah.com",
      password: hashed,
      isAdmin: true
    });

    const created = await Product.insertMany(sampleProducts);

    console.log("Seed finished:");
    console.log({ adminUser, created });
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
