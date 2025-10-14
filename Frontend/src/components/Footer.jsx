export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold mb-3">ORZAH</h2>
        <p>Men’s Fashion — Sneakers, Shirts, T-shirts & Accessories</p>
        <div className="mt-4">
          <p>📞 01559405312</p>
          <p>✉️ orzahstore@gmail.com</p>
        </div>
        <p className="text-gray-400 mt-4 text-sm">
          © {new Date().getFullYear()} ORZAH Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
