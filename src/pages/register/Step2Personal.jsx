

import React, { useState } from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";


const Step2Personal = ({ onNext, formData, setFormData }) => {
  const { currentUser, updateUser } = useAuthUser();

  // The useForm hook must be called at the top level of the component.
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      dob: formData.dob || "",
      gender: formData.gender || "",
      phone: formData.phone || "",
      address: formData.address || "",
    }
  });


  // The onSubmit function will be called by react-hook-form's handleSubmit
  // after validation is successful.
  const onSubmit = async (data) => {
    if (!currentUser) {
      return toast.error("Please login first");
    }

    try {
      // Save to parent formData (for preview later)
      setFormData({ ...formData, ...data });

      // Update Firestore under "personal" and "contact" key
      await updateUser(currentUser.uid, {
        personal: {
          firstName: data.firstName,
          lastName: data.lastName,
          dob: data.dob,
          gender: data.gender
        },
        contact: {
          phone: data.phone,
          address: data.address
        }
      });

      localStorage.setItem("uid", currentUser.uid);
      toast.success("Personal details saved!");
      onNext(); 
    } catch (err) {
      toast.error("Error saving personal info: " + err.message);
    }
  };

  return (
    <>
    <div class="step2form">
      <h3>Personal Info</h3>
    {/* Use react-hook-form's handleSubmit to wrap the form submission */}
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
    <input
  type="text"
  id="firstName"
  name="firstName"
  placeholder="First Name"
  // The 'value' and 'onChange' props are no longer needed, use spread props from register
  // value={localData.firstName}
  // onChange={handleChange}
  required
  {...register('firstName', {
    required: 'First name is required',
    minLength: { value: 3, message: 'First name must be at least 3 characters.' },
  })}
  className="w-full px-3 my-3 border rounded text-white"
/>
{errors.firstName && <p className="text-red-500 text-left px-3 text-sm">{errors.firstName.message}</p>}


      
<input
  type="text"
  name="lastName"
  placeholder="Last Name"
  // The 'value' and 'onChange' props are no longer needed
  // value={localData.lastName}
  // onChange={handleChange}
  className="border p-2 rounded"
  required
  {...register('lastName', {
    required: 'Last name is required',
    minLength: { value: 3, message: 'Last name must be at least 3 characters.' },
  })}
/>
{errors.lastName && <p className="text-red-500 text-left px-3 text-sm">{errors.lastName.message}</p>}

      <input
        type="date"
        name="dob"
        placeholder="Date of birth"
        // The 'value' and 'onChange' props are no longer needed
        // value={localData.dob}
        // onChange={handleChange}
        className="border cursor-pointer p-2 rounded"
        required
        {...register('dob', { required: 'DOB is required' })}
      />
  

<div className="gender flex">
  
  <label className="gender-text mx-2">Gender:</label>
  <div class="radio-group flex ">
    <label className="flex cursor-pointer items-center mx-2 " >
      <input className="cursor-pointer" type="radio" name="gender" value="male" {...register('gender', { required: 'Gender is required' })} /> Male
    </label>
    <label className="flex cursor-pointer items-center mx-2" >
      <input className="cursor-pointer" type="radio" name="gender" value="female" {...register('gender')} /> Female
    </label>
    <label className="flex cursor-pointer items-center mx-3" >
      <input className="cursor-pointer" type="radio" name="gender" value="other" {...register('gender')} /> Other
    </label>
  </div>
</div>
{errors.gender && <p className="text-red-500 text-left px-3 text-sm">{errors.gender.message}</p>}

<input
  type="tel"
  name="phone"
  placeholder="Mobile Number"
  // The 'value' and 'onChange' props are no longer needed
  // value={localData.phone}
  // onChange={handleChange}
  className="border p-2 rounded"
  required
  {...register('phone', {
    required: 'Mobile number is required',
    pattern: {
      value: /^[0-9]{10}$/, // This pattern matches exactly 10 digits
      message: 'Invalid mobile number format, it should be 10 digits.',
    },
  })}
/>
{errors.phone && <p className="text-red-500 text-left px-3 text-sm">{errors.phone.message}</p>}

<input
  type="text"
  name="address"
  placeholder="Address"
  // The 'value' and 'onChange' props are no longer needed
  // value={localData.address}
  // onChange={handleChange}
  className="border p-2 rounded"
  required
  {...register('address', {
    required: 'Address is required',
    minLength: {
      value: 5,
      message: 'Address must be at least 5 characters long.',
    },
  })}
/>
{errors.address && <p className="text-red-500 text-left px-3 text-sm">{errors.address.message}</p>}


      <button type="submit" className="next bg-blue-500 text-white p-2 my-2 w-2/3 mx-auto cursor-pointer">
        Save & Next
      </button>
    </form>
  </div>
  <style jsx>{`
        
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        
                .step2form{
                  {/* background:url('https://images.unsplash.com/photo-1699462515761-90db271d77c8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */}
                  border: 1px solid red;
                  margin: 3vw;
                  padding-inline: 3vw;
                  padding-block:2vw;
                  width: fit-content;
                  margin-inline: auto;
                  background: rgba(255, 255, 255, 0.1); 
                  {/* border-radius: 15px; */}
                  text-align: center;
                  backdrop-filter: blur(10px); 
                  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
                  {/* color: #fff;  */}
                  border: 1px solid rgba(255, 255, 255, 0.2); 
        
                }
                form {
                  margin-top:2vw;
                  width: 30vw;
                  margin-inline: auto;
                }
                h3 {
                  font-size: 1.7vw;
                  font-weight: 700;
                  background: linear-gradient(
          to left,
          #095DB7,
          #41D7B7
         
        );
                    -webkit-background-clip: text;
                  color: transparent;
                }
                input {
          width: 100%;
          padding-block: 10px ;
          margin-block:0.5vw;
          color:black;
          border: none;
          border-radius:0;
          border-bottom: 2px solid #ddd;
          font-size: 1em;
          background: transparent;
          outline: none;
          transition: border-bottom 0.3s, color 0.3s;
        }
        .gender input{
          width: fit-content;
          margin-inline:1vw;
        }
        .next{
  letter-spacing: 0.3ch;
font-weight: 700;
  color:white;
  {/* transform:skewX(8deg); */}
  background: linear-gradient(
  to left,
  #018CD9,
  #10DBB8
 
);
}
        @media screen and (max-width:1000px){
          .step1form{
            margin-top:10vw;
        
          }
          form{
            width: 45vw;
          }
          h3{
            font-size:3vw;
          }

        }
        @media screen and (max-width:700px){
          .step2form{
            margin-top:10vw;
        
          }
          form{
            width: 55vw;
          }
          h3{
            font-size:4vw;
          }
        }
        @media screen and (max-width:550px){
          .step1form{
            margin-top:25vw;
        
          }
          .gender-text{
            display: none;
          }
          form{
            width: 75vw;
            padding:1vw;
          }
          {/* input{
            font-size:4vw;
          } */}
          h3{
            font-size:5vw;
          }
          .next{
            margin-block-end:2vw;

          }
        }
              `}</style>
   </>
  );
};

export default Step2Personal;