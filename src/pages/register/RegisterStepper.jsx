import React, { useState } from "react";
import Step1Email from "./Step1Email.jsx";
import Step2Personal from "./Step2Personal.jsx";
import Step3College from "./Step3College.jsx";
import Step4Preview from "./Step4Preview.jsx";
import Step5Success from "./Step5Success.jsx";

export default function RegisterStepper() {
  // full form state
  const [data, setData] = useState({
    email: "",
    password: "",
    displayName: "",
    phone: "",
    college: "",
    branch: "",
    passingYear: "",
    rollNumber: "",
    uid: null,
  });

  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const update = (patch) => setData((d) => ({ ...d, ...patch }));

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {[1,2,3,4,5].map((n) => (
          <div key={n} className={`px-3 py-1 rounded ${n===step ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
            Step {n}
          </div>
        ))}
      </div>

      {step === 1 && <Step1Email data={data} update={update} next={next} />}
      {step === 2 && <Step2Personal data={data} update={update} next={next} back={back} />}
      {step === 3 && <Step3College data={data} update={update} next={next} back={back} />}
      {step === 4 && <Step4Preview data={data} back={back} next={next} update={update} />}
      {step === 5 && <Step5Success data={data} />}
    </div>
  );
}
