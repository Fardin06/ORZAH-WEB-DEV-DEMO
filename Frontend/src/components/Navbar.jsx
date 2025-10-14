import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="ORZAH" className="w-10 h-10" />
          <span className="text-xl font-bold">ORZAH</span>
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/shop" className="hover:text-brand">Shop</Link>
          <Link to="/contact" className="hover:text-brand">Contact</Link>
          <Link to="/cart" className="flex items-center">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
