import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOrder = () => {
    if (!paymentMethod) return alert("Select a payment method!");
    setSuccess(true);
    clearCart();
  };

  if (success)
    return (
      <div className="text-center mt-24">
        <h2 className="text-3xl font-semibold mb-4">Order Successful 🎉</h2>
        <p className="text-gray-600">Thank you for shopping with ORZAH!</p>
      </div>
    );

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Checkout</h2>
      <div className="max-w-lg mx-auto space-y-4">
        <label className="block">Select Payment Method:</label>
        <select
          className="border p-2 rounded w-full"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Choose...</option>
          <option value="bkash">bKash</option>
          <option value="nagad">Nagad</option>
          <option value="visa">Visa / MasterCard</option>
          <option value="bank">Online Banking</option>
          <option value="cod">Cash on Delivery</option>
        </select>
        <button
          onClick={handleOrder}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
