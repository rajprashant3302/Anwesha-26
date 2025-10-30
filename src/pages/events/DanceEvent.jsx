import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function DanceEvent() {
  return (
    <MulticityThemeWrapper
      title="💃 Dance Event"
      subtitle="Where Movement Meets Expression."
    >
      <p className="text-lg text-gray-200">
        Dance is a universal language that transcends boundaries. This event
        offers a platform for dancers across genres to showcase creativity —
        from classical grace to high-energy hip-hop fusion.
      </p>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">CATEGORIES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Solo Dance</li>
          <li>Group Dance</li>
        </ul>
      </div>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">GENERAL GUIDELINES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>All dance forms allowed — classical, hip-hop, folk, etc.</li>
          <li>Music must be in .mp3 format (Pen Drive + Drive upload)</li>
          <li>Vulgarity or obscenity is strictly prohibited</li>
          <li>Props allowed (safe and non-damaging only)</li>
          <li>Powder, liquids, fire, or hazardous items banned</li>
          <li>Judges’ decision is final</li>
        </ul>
      </div>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h3 className="text-2xl font-bold text-[#ffcc7a] mb-2">SOLO DANCE RULES</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Duration: 1.5 – 3 minutes</li>
          <li>Participants bring own costumes & props</li>
          <li>Evaluated individually</li>
        </ul>
      </div>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h3 className="text-2xl font-bold text-[#ffcc7a] mb-2">GROUP DANCE RULES</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Team Size: 4–25 members</li>
          <li>Duration: 3 – 6 minutes</li>
          <li>No couple routines</li>
          <li>Props allowed within safety rules</li>
        </ul>
      </div>

      <p className="text-[#ffcc7a] font-semibold mt-8">
        🏆 Prizes: Top 3 winners get exclusive Anwesha ’26 merch, fest entry & 1-year JioSaavn subscription.
      </p>
    </MulticityThemeWrapper>
  );
}
