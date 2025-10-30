import React, { useState, useEffect, useRef } from "react";
import { useAuthUser } from "../../context/AuthUserContext.jsx";
import { Eye, EyeOff, Mail, Lock, KeyRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Step1EmailPassword({ formData, setFormData, next }) {
  const [email, setEmail] = useState(formData.email || "");
  const [password, setPassword] = useState(formData.password || "");
  const [isDisabled, setDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // otp
  const [isOtpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [expiryTime, setExpiryTime] = useState(null); // timestamp
  const timerRef = useRef(null);

  const navigate = useNavigate();
  const { registerUser } = useAuthUser();

  // handle registration after OTP verified
  const handleSubmit = async () => {
    setDisabled(true);
    try {
      const userDoc = await registerUser(email, password);
      if (userDoc) {
        localStorage.setItem("uid", userDoc.uid);
        setFormData({ ...formData, email, password });
        next();
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setDisabled(false);
    }
  };


  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Enter email first");
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setOtp("");

    try {
      setDisabled(true);

      const expiry = new Date(Date.now() + 5 * 60 * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      console.log(
        "SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE_ID,
        "TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        "PUBLIC:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          otp: newOtp,     
          time: expiry,    
          email: email,  
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );


      toast.success("OTP sent to your email!");
      setOtpSent(true);
      setExpiryTime(Date.now() + 5 * 60 * 1000);
    } catch (err) {
      toast.error("Failed to send OTP. Check EmailJS config.");
    } finally {
      setDisabled(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (Date.now() > expiryTime) {
      toast.error("OTP expired. Please resend.");
      return;
    }
    if (otp === generatedOtp) {
      toast.success("OTP verified!");
      clearInterval(timerRef.current);
      handleSubmit(); 
    } else {
      toast.error("Invalid OTP.");
    }
  };

  
  const [remaining, setRemaining] = useState(0);
  useEffect(() => {
    if (!expiryTime) return;
    timerRef.current = setInterval(() => {
      const diff = expiryTime - Date.now();
      setRemaining(diff > 0 ? Math.floor(diff / 1000) : 0);
      if (diff <= 0) clearInterval(timerRef.current);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [expiryTime]);

  const resendOtp = () => {
    handleSendOtp(new Event("submit"));
  };

  return (
    <div className="flex items-center justify-center mb-14 sm:px-6">
      <div className="rounded-3xl shadow-2xl border p-10 w-full max-w-md bg-white/80 text-center animate-fade-in">
        <h3 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-[#471b00] to-[#d79757] bg-clip-text text-transparent">
          Dive into Multicity
        </h3>

        {!isOtpSent ? (
          /* Step 1 - Email + Password */
          <form onSubmit={handleSendOtp} className="flex flex-col gap-6">
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 text-xl rounded-xl text-black bg-white/60 outline-none border-2 border-transparent 
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-12 pr-12 py-3 text-xl ml-2 rounded-xl text-black bg-white/60 outline-none border-2 border-transparent 
                           focus:border-green-400 focus:ring-2 focus:ring-green-200 placeholder-gray-500"
                disabled={isDisabled}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute  right-4 top-1/2 -translate-y-1/2 text-gray-700 hover:text-black transition"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            <p className="text-[1rem] text-left text-gray-800">
              Password must be <span className="font-semibold">8+ characters</span>, include{" "}
              <span className="font-semibold">a letter</span> and <span className="font-semibold">a number</span>.
            </p>

            <button
              type="submit"
              className="w-full text-2xl tracking-widest bg-[url('/bg_2_cropped.jpg')] bg-cover bg-bottom rounded-xl text-white py-2  mb-4 hover:scale-102
                         cursor-pointer font-bold  shadow-lg transition-all duration-300 
                         transform  disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isDisabled}
            >
              {isDisabled ? "Sending..." : "Send OTP →"}
            </button>
          </form>
        ) : (
          /* Step 2 - OTP verify */
          <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6">
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                className="w-full pl-12 pr-4 py-3 rounded-xl text-black bg-white/60 outline-none border-2 border-transparent 
                           focus:border-blue-400 focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
                required
              />
            </div>

            {remaining > 0 ? (
              <p className="text-sm text-gray-700">
                OTP expires in <span className="font-semibold">{remaining}s</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={resendOtp}
                className="text-brown-600 font-semibold underline"
              >
                Resend OTP
              </button>
            )}

            <button
              type="submit"
              className="bg-[url('/bg_2_cropped.jpg')] bg-cover bg-bottom 
                         text-white font-bold py-3 rounded-xl w-full shadow-lg transition-all duration-300 
                         transform hover:scale-105 hover:shadow-blue-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isDisabled}
            >
              Verify & Register
            </button>
          </form>
        )}

        <p className="mt-6 text-lg -translate-y-4 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#095DB7] text-xl font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
