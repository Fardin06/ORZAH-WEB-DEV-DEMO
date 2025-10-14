import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <p className="text-center mt-20">Your cart is empty.</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Your Cart</h2>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item._id} className="flex justify-between items-center border-b pb-3">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>${item.price} × {item.quantity}</p>
              </div>
            </div>
            <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:underline">
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={clearCart} className="px-4 py-2 border rounded-lg">Clear</button>
          <Link to="/checkout" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
