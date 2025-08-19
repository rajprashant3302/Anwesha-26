// src/pages/register/Step2Personal.jsx
import React, { useState } from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import toast from "react-hot-toast";

const Step2Personal = ({ onNext, formData, setFormData }) => {
  const { currentUser, updateUser } = useAuthUser();
  const [localData, setLocalData] = useState({
    firstName: formData.firstName || "",
    lastName: formData.lastName || "",
    dob: formData.dob || "",
    gender: formData.gender || "",
    phone: formData.phone || "",
    address: formData.address || "",
  });

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!currentUser) return toast.error("Please login first");

  try {
   
    setFormData({ ...formData, ...localData });

   
    const newStatus = formData.status && parseInt(formData.status) > 2 
      ? formData.status 
      : "2";

    await updateUser(currentUser.uid, {
      personal: {
        firstName: localData.firstName,
        lastName: localData.lastName,
        dob: localData.dob,
        gender: localData.gender,
      },
      contact: {
        phone: localData.phone,
        address: localData.address,
      },
      status: newStatus,
    });

    localStorage.setItem("uid", currentUser.uid);
    toast.success("Personal details saved!");
    onNext();
  } catch (err) {
    toast.error("Error saving personal info: " + err.message);
  }
};


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={localData.firstName}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={localData.lastName}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="date"
        name="dob"
        value={localData.dob}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <select
        name="gender"
        value={localData.gender}
        onChange={handleChange}
        className="border p-2 rounded text-black"
        required
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <input
        type="tel"
        name="phone"
        placeholder="Mobile Number"
        value={localData.phone}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={localData.address}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Save & Next
      </button>
    </form>
  );
};

export default Step2Personal;
