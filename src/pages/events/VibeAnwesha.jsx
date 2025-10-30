import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function VibeAnwesha() {
  return (
    <MulticityThemeWrapper
      title="📱 Vibe@Anwesha"
      subtitle="Multicity Reel-Making Challenge"
    >
      <p className="text-lg text-gray-200">
        Vibe@Anwesha is a creative challenge to produce engaging short videos
        capturing the fest’s energy and theme. Blend storytelling with visuals
        that reflect the true spirit of Anwesha.
      </p>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">GUIDELINES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Duration: 15–60 seconds</li>
          <li>Individual or team (max 3 members)</li>
          <li>Up to 2 entries per participant/team</li>
          <li>Can use official Anwesha media clips</li>
          <li>No offensive or unsafe content</li>
        </ul>
      </div>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">SUBMISSION</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Start Date: 4th Oct 2025</li>
          <li>Deadline: 10th Oct 2025, 12 PM</li>
          <li>Tag @anwesha_iitp on Instagram and fill Google Form</li>
        </ul>
      </div>

      <p className="text-[#ffcc7a] font-semibold mt-8">
        🏆 Prizes: Top 3 winners get exclusive Anwesha ’26 merch, fest entry & JioSaavn subscription.
      </p>
    </MulticityThemeWrapper>
  );
}
