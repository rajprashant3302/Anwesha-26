import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function VibeAnwesha() {
  return (
    <MulticityThemeWrapper
      title="🎬 Vibe@Anwesha – Reel Making Challenge"
      subtitle="Multicity 2026 • Creativity in Motion"
    >
      {/* Overview */}
      <div className="bg-black/50 p-6 rounded-xl border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-2">Overview</h2>
        <p className="text-gray-200 leading-relaxed">
          The <b>Vibe@Anwesha</b> is a creative competition inviting participants to produce engaging short videos 
          (Instagram reels) based on the given theme.
        </p>
      </div>

      {/* Basic Info */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-2">Event Details</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>
            <b>Start Date:</b> 4th October 2025
          </li>
          <li>
            <b>Venue:</b> Online
          </li>
        </ul>
      </div>

      {/* Guidelines */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">GUIDELINES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Duration: 15–60 seconds.</li>
          <li>
            Your reel must creatively capture the given theme, blending the fest’s spirit with engaging storytelling.
          </li>
          <li>
            Participation can be individual or team (maximum 2–3 members). Only two entries per participant/team are allowed.
          </li>
          <li>
            Participants can use clips from Anwesha IITP’s Instagram reels, aftermovies, etc.
          </li>
          <li>
            Any vulgar, offensive, discriminatory, or depiction of alcohol, smoking, drugs, or unsafe acts content is strictly prohibited.
          </li>
        </ul>
      </div>

      {/* Submission */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">SUBMISSION</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>
            <b>Deadline:</b> 12 PM, 10th October 2025
          </li>
          <li>
            The reel must be posted on the participant’s personal Instagram account, tagging the official Anwesha IITP page.
          </li>
          <li>
            All participants must submit their reel via the official Google Form, including their name, phone number, and Instagram handle.
          </li>
          <li>
            Submissions will be considered valid only upon successful form completion.
          </li>
        </ul>
      </div>

      {/* Judging Criteria */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">JUDGING CRITERIA</h2>
        <p className="text-gray-200">
          The winners of the challenge will be decided on the basis of:
        </p>
        <ul className="list-disc ml-6 text-gray-200 space-y-2 mt-2">
          <li>Likes, comments, and shares.</li>
          <li>Creativity & Quality of Fest Promotion.</li>
        </ul>
      </div>

      {/* Note */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">NOTE</h2>
        <p className="text-gray-200">
          The organizing committee reserves the right to make any last minute change in the rules.
        </p>
      </div>

      {/* Prizes */}
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
