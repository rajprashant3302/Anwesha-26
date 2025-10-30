import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function NukkadNatak() {
  return (
    <MulticityThemeWrapper
      title="🎭 Nukkad Natak – Anwesha Multicity"
      subtitle="The Streets. The Stage. Your Voice."
    >
      {/* Introduction */}
      <p className="text-lg text-gray-200 leading-relaxed">
        Anwesha, the annual cultural fest of IIT Patna, brings you <b>Nukkad Natak</b> — 
        a high-energy street theatre competition. Step into the circle, captivate the 
        crowd, and make your message impossible to ignore.
      </p>

      {/* Rules Section */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">RULES</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>Team Size: Each team must have 10–20 participants.</li>
          <li>Performance Time: Maximum 20 minutes. Exceeding the limit may result in penalties.</li>
          <li>Language: The play must be in Hindi. Use of slang from other languages is permitted.</li>
          <li>Registration: Online.</li>
          <li>Script: Original scripts are encouraged; adaptations are allowed if well-executed.</li>
          <li>Sound & Music: No microphones, speakers, or electronic instruments will be provided or allowed. Use your voice and body for impact.</li>
          <li>Props: Teams must bring their own props and costumes.</li>
          <li>Safety: Fire and water in any form are strictly prohibited.</li>
          <li>Content: Avoid vulgar language, offensive signs, or disrespectful gestures. Maintain the spirit of the event.</li>
          <li>Professional Help: All performers must be bona fide students of their institutions. Carry valid ID cards.</li>
          <li>Final Decision: Judges’ verdict will be final and binding.</li>
        </ul>
      </div>

      {/* Judging Criteria Section */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">JUDGING CRITERIA</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>Script & Originality – Compelling and unique storyline.</li>
          <li>Acting, Energy & Voice – Powerful performance and clarity.</li>
          <li>Direction & Flow – Smooth, well-structured execution.</li>
          <li>Creativity & Impact – Innovative ideas that leave a strong impression.</li>
        </ul>
      </div>

      {/* Note Section */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">NOTE</h2>
        <p className="text-gray-200">
          The organizing committee reserves the right to make any last-minute change in the rules.
        </p>
      </div>

      {/* Prize Section */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">PRIZE</h2>
        <p className="text-gray-200">
          The top winner will receive exclusive <b>Anwesha ‘26 merchandise</b>, free entry to the fest, 
          and a complimentary <b>1-year JioSaavn subscription</b>.
        </p>
      </div>
    </MulticityThemeWrapper>
  );
}
