// // // src/pages/register/Step4Preview.jsx
// // import React from "react";
// // import { useAuthUser } from "../../context/AuthUserContext";
// // import toast from "react-hot-toast";

// // export default function Step4Preview({ formData, next }) {
// //   const { currentUser, finalizeRegistration, updateUser } = useAuthUser();

// //   const handleFinalSubmit = async () => {
// //     try {
// //       if (!currentUser?.uid) {
// //         toast.error("User not found. Please login again.");
// //         return;
// //       }


// //       const anweshaId = await finalizeRegistration(currentUser.uid, formData);


// //       await updateUser(currentUser.uid, { status: "successful" });

// //       toast.success("Registration completed successfully!");

// //       next(anweshaId);
// //     } catch (err) {
// //       toast.error(err.message);
// //     }
// //   };

// //   return (
// //     <>
// //     <div className="information text-center space-y-4">
// //       <h2 className="text-xl text-center my-6 text-red-500 font-bold">Confirm Your Details</h2>

// //       <div className="mx-3 text-center px-7 p-4 rounded text-black">
        
// //         {/* <h3 className="font-semibold ">Personal</h3> */}
// //         <p className="gap-40"><span>Name</span> <span>{currentUser.personal?.firstName + " " + currentUser.personal?.lastName}</span></p>
// //         <p className="gap-41"><span>Email</span><span>k{currentUser.personal?.email}</span></p>
// //         <p className="gap-36"><span>Address</span><span>k{currentUser.personal?.address}</span></p>
     
// //         {/* <h3 className="mt-3 font-semibold">College</h3> */}
// //         <p className="gap-37"><span>College</span> <span>{currentUser.college?.name}</span></p>
// //         <p className="gap-43"><span>City</span> <span>{currentUser.college?.city}</span></p>
// //         <p className="gap-27"><span>Passing Year</span> <span>{currentUser.college?.passingYear}</span></p>
       
    
// //         {/* <h3 className="mt-3 font-semibold">Contact</h3> */}
// //         <p className="gap-38"><span>Phone</span> <span>{currentUser.contact?.phone}</span></p>
     
// //       </div>

// //       <button
// //         onClick={handleFinalSubmit}
// //         className="next bg-green-600 mx-auto text-white py-2  cursor-pointer"
// //       >
// //          SUBMIT 
// //       </button>
// //     </div>
    
// //     <style jsx>{`
        
// //         @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
       
// //         .information p {
        
// // display: flex;
// // margin-block:1.3vw;
// // {/* gap: 15vw; */}
// // {/* border-bottom: 1.8px solid rgb(170, 170, 170); */}
// // width: fit-content;
// // }
// // .information p span:nth-child(2) {
// //   color: rgb(144,133,143);
// //   {/* border:1px solid black; */}
// //   border-radius:4px;
// //   transform:translateY(-3px);
// //   padding:0.5vw 1vw;
// //   background-color:rgb(255,255,195);
// // }
   
// // .next{
// //   width: 20vw;

// // }
      
// //               `}</style>
// //     </>
// //   );
// // }

// import React from "react";
// import { useAuthUser } from "../../context/AuthUserContext";
// import toast from "react-hot-toast";

// export default function Step4Preview({ formData, next }) {
//   const { currentUser, finalizeRegistration, updateUser } = useAuthUser();

//   const handleFinalSubmit = async () => {
//     try {
//       if (!currentUser?.uid) {
//         toast.error("User not found. Please login again.");
//         return;
//       }

//       const anweshaId = await finalizeRegistration(currentUser.uid, formData);

//       await updateUser(currentUser.uid, { status: "successful" });

//       toast.success("Registration completed successfully!");

//       next(anweshaId);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   return (
//     <>
//       <div className="confirmation-container">
//         <div className="status">
//           <span className="checkmark">✔</span>
//           <p>Your multimedia projector booking is now complete. Thank you.</p>
//         </div>

//         <div className="details-container">
//           <div className="details">
//             <p><strong>Name:</strong> {currentUser.personal?.firstName + " " + currentUser.personal?.lastName}</p>
//             <p><strong>Email:</strong> {currentUser.personal?.email}</p>
//             <p><strong>Address:</strong> {currentUser.personal?.address}</p>
//             <p><strong>College:</strong> {currentUser.college?.name}</p>
//             <p><strong>City:</strong> {currentUser.college?.city}</p>
//             <p><strong>Passing Year:</strong> {currentUser.college?.passingYear}</p>
//             <p><strong>Phone:</strong> {currentUser.contact?.phone}</p>
//           </div>
          
//           <button
//             onClick={handleFinalSubmit}
//             className="submit-button"
//           >
//             SUBMIT
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         .confirmation-container {
//           font-family: Arial, sans-serif;
//           background: #fff;
//           max-width: 600px;
//           margin: 0 auto;
//           padding: 20px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           border-radius: 8px;
//         }
//         .details p{
//           border-bottom:1px solid brown;
//           margin:1vw;
//         }
//         .status {
//           display: flex;
//           align-items: center;
//           margin-bottom: 20px;
//         }

//         .checkmark {
//           color: green;
//           font-size: 30px;
//           margin-right: 10px;
//         }

//         .details-container {
//           text-align: left;
//         }

//         .details p {
//           font-size: 16px;
//           margin: 8px 0;
//         }

//         .details strong {
//           font-weight: 700;
//           color: #333;
//         }

//         .submit-button {
//           display: inline-block;
//           margin-top: 20px;
//           padding: 12px 24px;
//           background-color: #4CAF50;
//           color: #fff;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           text-align: center;
//           width: 100%;
//         }

//         .submit-button:hover {
//           background-color: #45a049;
//         }

//         @media screen and (max-width: 600px) {
//           .confirmation-container {
//             padding: 15px;
//           }

//           .submit-button {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </>
//   );
// }




// src/pages/register/Step4Preview.jsx
import React from "react";
import { useAuthUser } from "../../context/AuthUserContext";
import toast from "react-hot-toast";

export default function Step4Preview({ formData, next }) {
  const { currentUser, finalizeRegistration, updateUser } = useAuthUser();

  const handleFinalSubmit = async () => {
    try {
      if (!currentUser?.uid) {
        toast.error("User not found. Please login again.");
        return;
      }

      // Check if all necessary data is present before finalizing
      if (!currentUser.personal?.firstName || !currentUser.personal?.lastName || !currentUser.personal?.gender || !currentUser.contact?.phone || !currentUser.contact?.address) {
        toast.error("Please go back and fill in all personal and contact details.");
        return;
      }
      
      if (!currentUser.college?.name || !currentUser.college?.passingYear || !currentUser.college?.city) {
        toast.error("Please go back and fill in all college details.");
        return;
      }
      
      const anweshaId = await finalizeRegistration(currentUser.uid, formData);

      await updateUser(currentUser.uid, { status: "successful" });

      toast.success("Registration completed successfully!");

      next(anweshaId);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
    <div className="preview-container" >
      <div className="preview-header ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="check-icon">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
        </svg>
        <span className="success-message">Confirm your details</span>
      </div>

  
      
      <div className="info-section">
        <div className="info-row">
          <span className="info-label">Name</span>
          <span className="info-value">{currentUser.personal?.firstName + " " + currentUser.personal?.lastName}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Gender</span>
          <span className="info-value">{currentUser.personal?.gender}</span>
        </div>
        <div className="info-row">
          <span className="info-label">College</span>
          <span className="info-value">{currentUser.college?.name}</span>
        </div>
        <div className="info-row">
          <span className="info-label">City</span>
          <span className="info-value">{currentUser.college?.city}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Passing Year</span>
          <span className="info-value">{currentUser.college?.passingYear}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Phone</span>
          <span className="info-value">{currentUser.contact?.phone}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Address</span>
          <span className="info-value">{currentUser.contact?.address}</span>
        </div>
        {/* <div className="info-row">
          <span className="info-label">Reference number</span>
          <span className="info-value reference-number">7FZWEA8SJYVLAZAK1AX4JXYR5</span>
        </div> */}
      </div>

      <button
        onClick={handleFinalSubmit}
        className="next-button w-1/3"
      >
        SUBMIT
      </button>

    </div>
    
    <style jsx>{`
        
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
      
      .preview-container {
        font-family: 'Roboto', sans-serif;
        max-width: 600px;
        margin: 20px auto;
        margin-top:5vh;
        padding: 20px;
        border-radius: 8px;
        background-color: #f7f7f7;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        color: #333;
      }
      
      .preview-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
      }
      
      .check-icon {
        color: #4CAF50;
        width: 32px;
        height: 32px;
      }
      
      .success-message {
        font-size: 1.25rem;
        font-weight: 500;
        color: #4CAF50;
      }
      
      .button-group {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 24px;
      }
      
      .preview-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        background-color: white;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
        gap: 8px;
        transition: background-color 0.3s;
      }
      
      .preview-button:hover {
        background-color: #f0f0f0;
      }
      
      .button-icon {
        width: 20px;
        height: 20px;
        color: #666;
      }
      
      .info-section {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 0 16px;
      }
      
      .info-row {
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px solid #eee;
      }
      
      .info-row:last-child {
        border-bottom: none;
      }
      
      .info-label {
        font-weight: 500;
        color: #555;
      }
      
      .info-value {
        color: #333;
       
        text-align: right;
      }
      
      .reference-number {
        font-weight: bold;
        color: #333;
        font-family: monospace;
      }
      
      .next-button {
        display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #32cc65; 
  {/* border-radius: 12px; */}
  color: white; 
  margin-inline:auto;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  width: 50%;
  margin-left:24%;
  box-shadow: 8px 8px 15px #a3b1c6, -8px -8px 15px #ffffff; 
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
      }
      
      .next-button:hover {
        background-color: rgb(134, 231, 166); 
  box-shadow: 4px 4px 10px #a3b1c6, -4px -4px 10px #ffffff; 
  transform: translateY(-2px);
      }
      .next-button:active {
        background-color: #A8E6CF; 
  box-shadow: inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff; 
  transform: translateY(2px); 
      }

      /* Mobile responsiveness */
      @media (max-width: 600px) {
        .preview-container {
          margin: 10px;
          padding: 15px;
        }

        .preview-header {
          flex-direction: column;
          text-align: center;
          gap: 5px;
        }
        
        .check-icon {
          width: 24px;
          height: 24px;
        }

        .success-message {
          font-size: 1rem;
        }

        .button-group {
          flex-direction: column;
          gap: 15px;
        }

        .info-row {
          flex-direction: column;
          align-items: flex-start;
        }
      }
              `}</style>
    </>
  );
}
