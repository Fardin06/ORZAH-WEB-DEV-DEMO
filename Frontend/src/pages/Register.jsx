import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, { name, email, password });
      alert("Registration successful!");
    } catch {
      alert("Error registering. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 border rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create Account</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="text" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" required />
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="w-full border p-2 rounded" required />
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Register
        </button>
      </form>
    </div>
  );
}
