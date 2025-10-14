import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-24">
      <h1 className="text-4xl font-bold mb-6">Welcome to ORZAH</h1>
      <p className="text-gray-600 mb-8">
        Discover premium men’s sneakers, shirts, t-shirts, and accessories.
      </p>
      <Link
        to="/shop"
        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Shop Now
      </Link>
    </div>
  );
}
