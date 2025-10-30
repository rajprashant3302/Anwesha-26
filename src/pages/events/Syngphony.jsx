import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function Syngphony() {
  return (
    <MulticityThemeWrapper
      title="🎵 Syngphony"
      subtitle="The Musical Extravaganza by Anwesha"
    >
      <p className="text-lg text-gray-200">
        Step into Syngphony — a celebration of sound and soul! This competition
        removes genre barriers, inviting artists to innovate and express
        freely. Let the music speak.
      </p>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">SOLO PERFORMANCE</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Duration: Up to 6 minutes (with soundcheck)</li>
          <li>Bring own instruments (no electronic provided)</li>
          <li>Backing tracks allowed (.mp3)</li>
          <li>No lyrics reference during performance</li>
          <li>Any language or style accepted</li>
        </ul>
      </div>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h3 className="text-2xl font-bold text-[#ffcc7a] mb-2">Judging Criteria</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Song Selection – 30%</li>
          <li>Taal / Rhythm Sense – 30%</li>
          <li>Sur / Melody – 30%</li>
          <li>Overall Impact – 10%</li>
        </ul>
      </div>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">DUET PERFORMANCE</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Duration: Up to 10 minutes</li>
          <li>Combinations: Two vocalists OR vocalist + instrumentalist</li>
          <li>Participants may perform in both Solo and Duet</li>
        </ul>
      </div>

      <p className="text-[#ffcc7a] font-semibold mt-8">
        🏆 Prizes: Top 3 winners get Anwesha ’26 merch, fest entry & JioSaavn subscription.
      </p>
    </MulticityThemeWrapper>
  );
}
