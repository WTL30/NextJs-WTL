"use client"; // Ensures client-side rendering

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter(); // Correct hook for App Router

  const handleLogin = (e) => {
    e.preventDefault();

    // Example logic
    if (email === "admin@example.com" && password === "password") {
      router.push("/dashboard"); // Redirect on successful login
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
          Login
        </h2>

        {error && (
          <div className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          {/* Forgot Password Option */}
          <p className="text-sm text-gray-600">
            <a href="/forgot-password" className="text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;