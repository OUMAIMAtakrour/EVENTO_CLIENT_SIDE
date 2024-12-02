import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { LogIn, UserPlus, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, userInfo } = useSelector((state) => state.auth);

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

 useEffect(() => {
   if (userInfo) {
     navigate("/org");
   }
 }, [userInfo, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      dispatch(
        login({
          email: formData.email,
          password: formData.password,
        })
      );
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      dispatch(
        signup({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden flex items-center justify-center">
      <div
        id="stars-background"
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
          overflow: "hidden",
        }}
      />

      <div className="relative z-10 w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl border border-gray-700 p-8 shadow-2xl">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`mr-4 px-4 py-2 rounded-lg transition ${
              isLogin
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <LogIn className="inline-block mr-2" size={20} />
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-lg transition ${
              !isLogin
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <UserPlus className="inline-block mr-2" size={20} />
            Sign Up
          </button>
        </div>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
                />
              </div>
            )}

            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
              />
            </div>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-10 bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isLogin && (
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 bg-gray-700 bg-opacity-50 text-white p-3 rounded-lg border border-gray-600"
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white p-3 rounded-lg transition ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Create Account"}
            </button>
          </div>
        </form>

        {isLogin && (
          <div className="text-center mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Forgot Password?
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
