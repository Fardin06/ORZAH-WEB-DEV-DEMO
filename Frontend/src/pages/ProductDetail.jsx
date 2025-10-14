import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-10">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-xl shadow" />
      <div>
        <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-bold mb-6">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
