// // src/pages/register/Step3CollegeDetails.jsx
// import React, { useState } from "react";
// import { db } from "../../firebase/firebaseConfig";
// import { doc, updateDoc } from "firebase/firestore";
// import { useAuthUser } from "../../context/AuthUserContext";
// import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";


// export default function Step3CollegeDetails({ next }) {
//   const { currentUser, updateUser } = useAuthUser();
//   const [collegeName, setCollegeName] = useState(currentUser?.college?.name || "");
//   const [passingYear, setPassingYear] = useState(currentUser?.college?.passingYear || "");
//   const [city, setCity] = useState(currentUser?.college?.city || "");
//   const { register, formState: { errors } } = useForm();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!currentUser?.uid) {
//       toast.error("User not found. Please login again.");
//       return;
//     }

//     try {
//       const collegeDetails = {
//         name: collegeName,
//         passingYear,
//         city,
//       };


//       await updateDoc(doc(db, "users", currentUser.uid), {
//         college: collegeDetails,
//       });


//       updateUser(currentUser.uid, { college: collegeDetails });

//       toast.success("College details saved!");
//       next();
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <>
//     <div class="step3form">
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <h3 className="mx-0">Step 3: College Details</h3>

//       <input
//   type="text"
//   placeholder="College Name"
//   value={collegeName}
//   onChange={(e) => setCollegeName(e.target.value)}
//   className="w-full p-2 rounded text-white bg-gray-800"
//   required
//   {...register('collegeName', {
//     required: 'College name is required',
//     minLength: {
//       value: 3,
//       message: 'College name must be at least 3 characters.',
//     },
//   })}
// />
// {errors.collegeName && <p className="text-red-500 text-left px-3 text-sm">{errors.collegeName.message}</p>}


// <input
//   type="number"
//   placeholder="Passing Year (e.g. 2026)"
//   value={passingYear}
//   onChange={(e) => setPassingYear(e.target.value)}
//   className="w-full p-2 rounded text-white bg-gray-800"
//   required
//   {...register('passingYear', {
//     required: 'Passing year is required',
//     min: {
//       value: 2010,
//       message: 'Please enter a valid year.',
//     },
//     max: {
//       value: new Date().getFullYear() + 5,
//       message: 'Year cannot be more than 5 years in the future.',
//     },
//   })}
// />
// {errors.passingYear && <p className="text-red-500 text-left px-3 text-sm">{errors.passingYear.message}</p>}

// <input
//   type="text"
//   placeholder="City of College"
//   value={city}
//   onChange={(e) => setCity(e.target.value)}
//   className="w-full p-2 rounded text-white bg-gray-800"
//   required
//   {...register('city', {
//     required: 'City is required', // Validation for required field
//     minLength: {
//       value: 3,
//       message: 'City name must be at least 3 characters long.',
//     },
//   })}
// />
// {errors.city && <p className="text-red-500 text-left px-3 text-sm">{errors.city.message}</p>}


//       <button type="submit" className="next cursor-pointer w-2/3 mx-auto bg-blue-500 px-4 py-2  ">
//         CONTINUE
//       </button>
//     </form>
//     </div>
//     <style jsx>{`
        
//         @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        
//                 .step3form{
//                   {/* background:url('https://images.unsplash.com/photo-1699462515761-90db271d77c8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */}
//                   border: 1px solid red;
//                   margin: 3vw;
//                   margin-top: 3vw;

//                   padding-inline: 3vw;

//                   padding-block: 1.4vw 5vw;
//                   width: fit-content;
//                   margin-inline: auto;
//                   background: rgba(255, 255, 255, 0.1); 
//                   {/* border-radius: 15px; */}
//                   text-align: center;
//                   backdrop-filter: blur(10px); 
//                   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
//                   {/* color: #fff;  */}
//                   border: 1px solid rgba(255, 255, 255, 0.2); 
        
//                 }
//                 form {
//                   margin-top:2vw;
//                   width: 30vw;
//                   margin-inline: auto;
//                 }
//                 h3 {
//                   font-size: 1.7vw;
//                   font-weight: 700;
//                   background: linear-gradient(
//           to left,
//           #095DB7,
//           #41D7B7
         
//         );
//                     -webkit-background-clip: text;
//                   color: transparent;
//                 }
//                 input {
//           width: 100%;
//           padding-block: 10px ;
//           margin-block:1vw;
//           color:black;
//           border: none;
//           border-radius:0;
//           border-bottom: 2px solid #ddd;
//           font-size: 1em;
//           background: transparent;
//           outline: none;
//           transition: border-bottom 0.3s, color 0.3s;
//         }
       
//         .next{
//           letter-spacing: 0.1ch;
//         font-weight: 700;
//         margin-block:2vw;
//           color:white;
//           background: linear-gradient(
//           to left,
//           #018CD9,
//           #10DBB8
         
//         );
//         }
//         @media screen and (max-width:1000px){
//           .step3form{
//             margin-top:10vw;
        
//           }
//           form{
//             width: 38vw;
//           }
//           h3{
//             font-size:3vw;
//           }

//         }
//         @media screen and (max-width:700px){
//           .step3form{
//             margin-top:10vw;
        
//           }
//           form{
//             width: 50vw;
//           }
//           h3{
//             font-size:4vw;
//           }
//         }
//         @media screen and (max-width:550px){
//           .step3form{
//             margin-top:18vw;
        
//           }
         
//           form{
//             width: 65vw;
//             padding:1vw;
//           }
//           {/* input{
//             font-size:4vw;
//           } */}
//           h3{
//             font-size:5vw;
//           }
//           .next{
//             margin-block-end:0;
//             margin-block:5vw;
//             padding-block:0.7vw;
          
//           }
//         }
//               `}</style>
  
//     </>
//   );
// }

// src/pages/register/Step3CollegeDetails.jsx
import React from "react";
import { db } from "../../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthUser } from "../../context/AuthUserContext";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";


export default function Step3CollegeDetails({ next }) {
  const { currentUser, updateUser } = useAuthUser();
  // Remove useState hooks as react-hook-form will manage the state
  // const [collegeName, setCollegeName] = useState(currentUser?.college?.name || "");
  // const [passingYear, setPassingYear] = useState(currentUser?.college?.passingYear || "");
  // const [city, setCity] = useState(currentUser?.college?.city || "");

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      collegeName: currentUser?.college?.name || "",
      passingYear: currentUser?.college?.passingYear || "",
      city: currentUser?.college?.city || "",
    }
  });

  // The onSubmit function will receive the validated form data
  const onSubmit = async (data) => {
    if (!currentUser?.uid) {
      toast.error("User not found. Please login again.");
      return;
    }

    try {
      const collegeDetails = {
        name: data.collegeName,
        passingYear: data.passingYear,
        city: data.city,
      };

      await updateDoc(doc(db, "users", currentUser.uid), {
        college: collegeDetails,
      });

      updateUser(currentUser.uid, { college: collegeDetails });

      toast.success("College details saved!");
      next();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
    <div class="step3form">
    {/* Use handleSubmit from react-hook-form to wrap the form submission */}
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="mx-0">Step 3: College Details</h3>

      <input
        type="text"
        placeholder="College Name"
        // Remove value and onChange props and use register instead
        // value={collegeName}
        // onChange={(e) => setCollegeName(e.target.value)}
        className="w-full p-2 rounded text-white bg-gray-800"
        required
        {...register('collegeName', {
          required: 'College name is required',
          minLength: {
            value: 3,
            message: 'College name must be at least 3 characters.',
          },
        })}
      />
      {errors.collegeName && <p className="text-red-500 text-left px-3 text-sm">{errors.collegeName.message}</p>}


      <input
        type="number"
        placeholder="Passing Year (e.g. 2026)"
        // Remove value and onChange props and use register instead
        // value={passingYear}
        // onChange={(e) => setPassingYear(e.target.value)}
        className="w-full p-2 rounded text-white bg-gray-800"
        required
        {...register('passingYear', {
          required: 'Passing year is required',
          min: {
            value: 2010,
            message: 'Passing year must be greater than 2010.',
          },
          max: {
            value: new Date().getFullYear() + 5,
            message: 'Year cannot be more than 5 years in the future.',
          },
        })}
      />
      {errors.passingYear && <p className="text-red-500 text-left px-3 text-sm">{errors.passingYear.message}</p>}

      <input
        type="text"
        placeholder="City of College"
        // Remove value and onChange props and use register instead
        // value={city}
        // onChange={(e) => setCity(e.target.value)}
        className="w-full p-2 rounded text-white bg-gray-800"
        required
        {...register('city', {
          required: 'City is required',
          minLength: {
            value: 3,
            message: 'City name must be at least 3 characters long.',
          },
        })}
      />
      {errors.city && <p className="text-red-500 text-left px-3 text-sm">{errors.city.message}</p>}


      <button type="submit" className="next cursor-pointer w-2/3 mx-auto bg-blue-500 px-4 py-2  ">
        CONTINUE
      </button>
    </form>
    </div>
    <style jsx>{`
        
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        
                .step3form{
                  {/* background:url('https://images.unsplash.com/photo-1699462515761-90db271d77c8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); */}
                  border: 1px solid red;
                  margin: 3vw;
                  margin-top: 3vw;

                  padding-inline: 3vw;

                  padding-block: 1.4vw 5vw;
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
          margin-block:1vw;
          color:black;
          border: none;
          border-radius:0;
          border-bottom: 2px solid #ddd;
          font-size: 1em;
          background: transparent;
          outline: none;
          transition: border-bottom 0.3s, color 0.3s;
        }
       
        .next{
          letter-spacing: 0.1ch;
        font-weight: 700;
        margin-block:2vw;
          color:white;
          background: linear-gradient(
          to left,
          #018CD9,
          #10DBB8
         
        );
        }
        @media screen and (max-width:1000px){
          .step3form{
            margin-top:10vw;
        
          }
          form{
            width: 38vw;
          }
          h3{
            font-size:3vw;
          }

        }
        @media screen and (max-width:700px){
          .step3form{
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
          .step3form{
            margin-top:18vw;
        
          }
         
          form{
            width: 65vw;
            padding:1vw;
          }
          {/* input{
            font-size:4vw;
          } */}
          h3{
            font-size:5vw;
          }
          .next{
            margin-block-end:0;
            margin-block:5vw;
            padding-block:0.7vw;
          
          }
        }
              `}</style>
  
    </>
  );
}