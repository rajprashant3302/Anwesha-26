import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthUser } from "../../context/AuthUserContext.jsx";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // to get redirect info
  const { loginUser, currentUser, loading } = useAuthUser();
  const [checkedSession, setCheckedSession] = useState(false);

  // Determine redirect target after login
  const redirectTo = location.state?.from || null;

  useEffect(() => {
  if (!loading) {
    setCheckedSession(true);

    if (currentUser) {
      if (redirectTo) {
        // Came from another page, go back there
        navigate(redirectTo, { replace: true });
      } else if (currentUser.status === "successful") {
        // Came directly to login, already logged in
        toast.success("You are already logged in!");
        navigate("/dashboard", { replace: true });
      } else {
        toast.error("Please complete your registration before continuing.");
      }
    }
  }
}, [loading, currentUser, navigate, redirectTo]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    try {
      await loginUser(email, password);
      // After login, redirect to previous page if exists, else dashboard
      navigate(redirectTo || "/dashboard", { replace: true });
    } catch (error) {
      setDisabled(false);
    }
  };

  if (!checkedSession) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg font-semibold">
        Checking session…
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 px-6">
      <div className="rounded-3xl shadow-2xl border border-white p-10 w-full max-w-md bg-white/80 text-center animate-fade-in">
        <h3 className="text-5xl font-extrabold mb-8 bg-gradient-to-l from-[#095DB7] to-[#41D7B7] bg-clip-text text-transparent">
          Welcome Back
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl text-black bg-white/60 outline-none border-2 border-transparent 
                         focus:border-blue-400 focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 rounded-xl text-black bg-white/60 outline-none border-2 border-transparent 
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

          <button
            type="submit"
            disabled={isDisabled}
            className="bg-gradient-to-r from-[#41D7B7] to-[#095DB7] hover:from-[#095DB7] hover:to-[#41D7B7] 
                       text-white font-bold py-3 rounded-xl w-full shadow-lg transition-all duration-300 
                       transform hover:scale-105 hover:shadow-blue-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDisabled ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#095DB7] font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
