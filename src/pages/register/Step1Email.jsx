import React, { useState } from "react";
import { useAuthUser } from "../../context/AuthUserContext.jsx";

export default function Step1EmailPassword({ formData, setFormData, next }) {
  const [email, setEmail] = useState(formData.email || "");
  const [password, setPassword] = useState(formData.password || "");
  const [isDisabled, setDisabled] = useState(false);

  const { registerUser } = useAuthUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    const userDoc = await registerUser(email, password);

    if (userDoc) {
      localStorage.setItem("uid", userDoc.uid);
      setFormData({ ...formData, email, password });
      next();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-black">
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded text-white"
        required
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded text-white"
        disabled={isDisabled}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-black px-4 py-2 rounded"
      >
        Next
      </button>
    </form>
  );
}
