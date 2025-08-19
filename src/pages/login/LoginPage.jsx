import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthUser } from "../../context/AuthUserContext.jsx";


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

    const { loginUser,currentUser } = useAuthUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data=await loginUser(email,password);
     console.log(data);
      navigate("/dashboard")
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-3 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign In 
        </button>
      </form>
    </div>
  );
}
