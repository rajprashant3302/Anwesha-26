// src/pages/register/RegisterPage.jsx
import React, { useState } from "react";
import Step1EmailPassword from "./Step1Email";
import Step2Personal from "./Step2Personal";
import Step3College from "./Step3College";
import Step4Preview from "./Step4Preview";
import Step5Success from "./Step5Success";
import { useAuthUser } from "../../context/AuthUserContext.jsx";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [anweshaId, setAnweshaId] = useState(null);


  const next = () => setStep((prev) => prev + 1);



  return (
    <div className="max-w-lg mx-auto mt-10 shadow-lg p-6 rounded bg-black text-white">
      {step === 1 && (
        <Step1EmailPassword
          formData={formData}
          setFormData={setFormData}
          next={next}
        />
      )}
      {step === 2 && (
        <Step2Personal
          formData={formData}
          setFormData={setFormData}
          onNext={next}
        />
      )}
      {step === 3 && (
        <Step3College
          formData={formData}
          setFormData={setFormData}
          next={next}
        />
      )}
      {step === 4 && (
        <Step4Preview
          formData={formData}
          next={(id) => {
            setAnweshaId(id);
            setStep(5);
          }}
        />
      )}

      {step === 5 && <Step5Success anweshaId={anweshaId} />}
    </div>
  );
}
