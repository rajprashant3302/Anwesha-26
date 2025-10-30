import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function BanarasGotTalent() {
  return (
    <MulticityThemeWrapper
      title="🎤 Banaras Got Talent"
      subtitle="Celebrating the artistic spirit of Banaras"
    >
      <p className="text-lg text-gray-200">
        A talent showcase celebrating the creative pulse of Banaras — from
        music and dance to stand-up, poetry, and more. It’s about passion,
        creativity, and expression!
      </p>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">RULES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Open to all registered students</li>
          <li>Solo or group (max 8 members)</li>
          <li>Categories: Dance, Music, Drama, Stand-up, etc.</li>
          <li>Solo: 3–5 min | Group: 5–8 min</li>
          <li>Bring own background tracks (.mp3)</li>
          <li>No hazardous props or offensive content</li>
          <li>Judges’ decision is final</li>
        </ul>
      </div>

      <p className="text-[#ffcc7a] font-semibold mt-8">
        🏆 Prizes: Top 3 winners get exclusive Anwesha ’26 merch, fest entry & JioSaavn subscription.
      </p>
    </MulticityThemeWrapper>
  );
}
