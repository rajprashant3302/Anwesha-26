import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function BanarasGotTalent() {
  return (
    <MulticityThemeWrapper
      title="🌟 Banaras Got Talent"
      subtitle="A Celebration of Creativity and Passion"
    >
      {/* Introduction */}
      <p className="text-lg text-gray-200 leading-relaxed">
        “Banaras Got Talent” is a vibrant talent showcase celebrating the artistic spirit of Banaras. 
        From music, dance, drama, and stand-up comedy to mimicry, poetry, and other unique performances — 
        this stage is open to every performer ready to dazzle the audience. 
        It’s not about perfection, it’s about passion and creativity!
      </p>

      {/* Rules Section */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">RULES</h2>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mb-2">1. Eligibility</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Open to all registered students of the college.</li>
          <li>Both solo and group performances are allowed (maximum group size: 8 members).</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">2. Categories</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Dance (Classical / Folk / Western / Freestyle)</li>
          <li>Music (Vocal / Instrumental)</li>
          <li>Drama / Skit / Mime</li>
          <li>Stand-up / Poetry / Mono Act / Art-based performance</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">3. Performance Duration</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Solo: 3–5 minutes</li>
          <li>Group: 5–8 minutes</li>
          <li>Exceeding the time limit will lead to negative marking.</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">4. Music & Props</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Participants must bring their own background tracks (in .mp3 format on a pen drive).</li>
          <li>Props are allowed but should not damage the stage or create safety hazards.</li>
          <li>Usage of fire, water, glass, or sharp objects is strictly prohibited.</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">5. Registration</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Participants must register online/offline before the deadline.</li>
          <li>Each participant/group should mention their performance type and requirements.</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">6. Code of Conduct</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Performances should be decent and respectful — no offensive or political content.</li>
          <li>Vulgarity or inappropriate gestures will lead to immediate disqualification.</li>
          <li>The decision of the judges and organizers will be final and binding.</li>
        </ul>
      </div>

      {/* Judging Criteria Section */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">⚖ JUDGING CRITERIA</h2>
        <p className="text-gray-200 mb-4">
          Participants will be evaluated based on the following parameters:
        </p>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Creativity & Originality – Uniqueness of the act, concept, and innovation (25%)</li>
          <li>Performance & Expression – Stage presence, confidence, emotion, synchronization (25%)</li>
          <li>Technical Skill – Voice control, rhythm, choreography, acting finesse, etc. (20%)</li>
          <li>Audience Engagement – Interaction, response, and energy (15%)</li>
          <li>Overall Impact – Impression, flow, and completeness of performance (15%)</li>
        </ul>
      </div>

      {/* Note Section */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">NOTE</h2>
        <p className="text-gray-200">
          The organizing committee reserves the right to make any last minute change in the rules.
        </p>
      </div>

      {/* Prizes Section */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">PRIZES</h2>
        <p className="text-gray-200">
          The top 3 winners will receive exclusive <b>Anwesha ‘26 merchandise</b>, free entry to the fest, 
          and a complimentary <b>1-year JioSaavn subscription</b>.
        </p>
      </div>
    </MulticityThemeWrapper>
  );
}
