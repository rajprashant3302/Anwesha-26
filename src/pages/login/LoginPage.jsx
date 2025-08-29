import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthUser } from "../../context/AuthUserContext.jsx";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const { loginUser } = useAuthUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      await loginUser(email, password);
      // toast.success("Signed in successfully!");
      navigate("/dashboard");
    } catch (error) {
      // toast.error("Invalid email or password");
      setDisabled(false);
    }
  };
  // from-[#374f37] to-[#aefaea] 
  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-[url('registerBg.jpg')] bg-cover bg-center  px-5 md:px-6">
      <div className=" w-90  md:w-96  rounded-2xl shadow-[10px_0px_500px_rgba(0,0,0,1)] p-6  max-w-md text-center animate-fade-in bg-white/20 backdrop-blur-lg">
        
        {/* Heading */}
        <h3 className="text-4xl px-4  md:5xl font-extrabold mb-8 bg-gradient-to-l to-[#07b707] from-[#899290] bg-clip-text text-transparent">
          Welcome Back
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg text-black bg-white/60 outline-none border-2 border-transparent 
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-lg text-black bg-white/60 outline-none border-2 border-transparent 
                         focus:border-green-400 focus:ring-2 focus:ring-green-200 placeholder-gray-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black transition"
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isDisabled}
            className="bg-gradient-to-r to-[#0ce66b] from-[rgb(72,235,200)] hover:from-[#0ce66b] hover:to-[rgb(72,235,200)] 
                       text-white font-bold py-3 rounded-xl w-fit px-13 cursor-pointer mx-auto shadow-lg transition-all duration-300 
                       transform hover:scale-105 hover:shadow-blue-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDisabled ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-slate-700">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#095DB7] font-semibold cursor-pointer underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
