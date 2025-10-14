import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, { email, password });
      alert("Login successful!");
    } catch {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 border rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" required />
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Login
        </button>
      </form>
    </div>
  );
}
