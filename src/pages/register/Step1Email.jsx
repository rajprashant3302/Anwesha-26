import React, { useState, useEffect } from "react";
import { useAuthUser } from "../../context/AuthUserContext.jsx";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Step1EmailPassword({ formData, setFormData, next }) {
  const [isDisabled, setDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser } = useAuthUser();

  // Use useForm hook to get register function and handleSubmit
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handling form submission
  const onSubmit = async (data) => {
    // Disable the button immediately upon submission
    setDisabled(true);

    const { email, password } = data;
    
    try {
      const userDoc = await registerUser(email, password);
  
      if (userDoc) {
        localStorage.setItem("uid", userDoc.uid);
        setFormData({ ...formData, email, password });
        next();
      }
    } catch (error) {
      // Re-enable the button if an error occurs during registration
      setDisabled(false);
      console.error("Registration failed:", error);
    }
  };
  
  useEffect(() => {
    // Set a background image for the register page
    // document.body.style.backgroundImage = 'url("https://plus.unsplash.com/premium_photo-1673480195911-3075a87738b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'; // Example image URL
    // document.body.style.background= 'red'; // Example image URL
    document.body.style.backgroundSize = 'cover';  // Ensure the image covers the entire body
    document.body.style.backgroundPosition = 'center';  // Center the background image

    // Cleanup when the component is unmounted or the route changes
    return () => {
      document.body.style.backgroundImage = '';  // Reset the background
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
    };
  }, []);

  return (
    <>
      <div className="step1form">
        <h3 className=" text-center py-3">Dive into Multicity</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              minLength: { value: 8, message: 'Email must be at least 8 characters.' },
              pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email format' }
            })}
            className="w-full px-3 my-3  border rounded text-white"
          />
          {/* Show error for email */}
          {errors.email && <p className="text-red-500 text-left px-3 text-sm">{errors.email.message}</p>}

          <div className="relative w-full">
            <input
              placeholder="Password"
              id="password"
              type={showPassword ? "text" : "password"}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters.' },
              })}
              className="w-full block px-3 py-2 my-3 pr-10 border border-gray-300 rounded-md "
            />

            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 text-lg"
            >
              {showPassword ? "👀" : "🙈"}
            </span>
          </div>
          {/* Show error for password */}
          {errors.password && <p className="text-red-500 px-3 text-left text-sm">{errors.password.message}</p>}

          <button
            type="submit"
            className="next bg-blue-500 w-1/3 my-3 mx-auto cursor-pointer text-black px-4 py-2"
            disabled={isDisabled}
          >
            {isDisabled ? "Processing..." : "NEXT"}
          </button>
        </form>
        <p className="text-sm my-3"> Already registered <Link className="underline text-blue-800" to="/login">Login</Link></p>
      </div>

      <style jsx>{`
        
@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

        .step1form{
          {/* background:url('https://images.unsplash.com/photo-1699462515761-90db271d77c8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */}
          border: 1px solid red;
          min-height:50vh;
          margin: 3vw;
          margin-top:12vh;
          padding: 2vw;
          padding-block-end:5vw;
          width: fit-content;
          margin-inline: auto;
          background: rgba(255, 255, 255, 0.1); 
          {/* border-radius: 15px; */}
          text-align: center;
          backdrop-filter: blur(4px); 
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
          {/* color: #fff;  */}
          border: 1px solid rgba(255, 255, 255, 0.2); 

        }
        form {
          width: 25vw;
          margin: auto;
          gap:1vw;
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
  color:black;
  border: none;
  border-bottom: 2.2px solid rgb(149,147,147);
  font-size: 1em;
  border-radius:0;
  background: transparent;
  outline: none;
  transition: border-bottom 0.3s, color 0.3s;
}
.next{
  letter-spacing: 0.3ch;
font-weight: 700;
  color:white;
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
  .step1form{
    margin-top:10vw;

  }
  form{
    width: 50vw;
  }
  h3{
    font-size:4vw;
  }
}
@media screen and (max-width:550px){
  .step1form{
    margin-top:25vw;

  }
  form{
    width: 75vw;
    padding:1vw;
  }
  input{
    font-size:4vw;
  }
  h3{
    font-size:5vw;
  }
  .next{
    width: fit-content;
  }
}
      `}</style>
    </>
  );
}