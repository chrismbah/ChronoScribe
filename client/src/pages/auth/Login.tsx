/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        inputs
      );
      alert("User created");
      navigate("/");
      console.log(res);
    } catch (err: any) {
      setError(err.response.data);
      console.log(err.res.data);
    }
  };
  console.log(inputs);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#fdfdfd]">
      <div className="bg-white rounded-md shadow-md p-8 w-[450px]">
        <form className="max-w-sm mx-auto">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your username
            </label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="@username"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              id="password"
              placeholder="••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          {err && (
            <p className="mb-2 text-red-500 text-xs font-medium">{err}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <span className="text-xs font-medium">
              Don't have an account?{" "}
              <Link to="/register" className="underline text-blue-500">
                Register
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
