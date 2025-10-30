import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function DanceEvent() {
  return (
    <MulticityThemeWrapper
      title="💃 Dance Event"
      subtitle="Where Movement Meets Expression."
    >
      {/* Introduction */}
      <p className="text-lg text-gray-200 leading-relaxed">
        Dance is a universal language that transcends boundaries. With its power
        to inspire, entertain, and connect, this event offers a dynamic platform
        for dancers across genres to showcase their expressions, emotions, and
        creativity. From high-energy hip-hop and classical grace to experimental
        fusion styles, the stage is set for performances that captivate, challenge,
        and inspire.
      </p>

      {/* Categories */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">CATEGORIES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Solo Dance</li>
          <li>Group Dance</li>
        </ul>
      </div>

      {/* General Guidelines */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">GENERAL GUIDELINES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Any dance form is allowed — classical, contemporary, hip-hop, folk, freestyle, fusion, etc.</li>
          <li>Songs of all languages and genres are permitted.</li>
          <li>
            Music must be submitted in .mp3 format via Pen Drive on the performance day and uploaded 
            through a Google Drive link provided in the Registration Form.
          </li>
          <li>
            Vulgarity, obscenity, or offensive gestures are strictly prohibited. Such acts may lead to 
            penalty or disqualification, at the discretion of the judges.
          </li>
          <li>
            Props are allowed, provided they do not damage or dirty the stage, and are safe to use.
          </li>
          <li>
            The following are strictly prohibited: powdery substances, liquids, fire, or any material that 
            may damage the stage or affect other performers. Use of these items will lead to a 30% penalty 
            and the team must restore the stage condition immediately.
          </li>
          <li>The jury’s decision is final and binding.</li>
        </ul>
      </div>

      {/* Solo Dance Rules */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">SOLO DANCE RULES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Performance Duration: Minimum 1.5 minutes and Maximum 3 minutes.</li>
          <li>Participants must bring their own costumes and props.</li>
          <li>Performance will be evaluated individually.</li>
        </ul>
      </div>

      {/* Solo Judging Criteria */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h3 className="text-2xl font-bold text-[#ffcc7a] mb-3">SOLO JUDGING CRITERIA</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Choreography</li>
          <li>Creativity & Uniqueness (prop usage, costume, concept, etc.)</li>
          <li>Energy</li>
          <li>Overall Impact</li>
        </ul>
      </div>

      {/* Group Dance Rules */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">GROUP DANCE RULES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Team Size: 4 to 25 members (including backstage & technical support).</li>
          <li>Performance Duration: Minimum 3 minutes and Maximum 6 minutes.</li>
          <li>This category does not include couple dance routines.</li>
          <li>Props are allowed, following general safety rules.</li>
        </ul>
      </div>

      {/* Group Judging Criteria */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h3 className="text-2xl font-bold text-[#ffcc7a] mb-3">GROUP JUDGING CRITERIA</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Choreography</li>
          <li>Creativity & Uniqueness (props, costumes, concepts, etc.)</li>
          <li>Energy</li>
          <li>Coordination</li>
          <li>Overall Impact</li>
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
