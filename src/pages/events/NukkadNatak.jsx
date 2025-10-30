import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function NukkadNatak() {
  return (
    <MulticityThemeWrapper
      title="🎭 Nukkad Natak"
      subtitle="The Streets. The Stage. Your Voice."
    >
      <p className="text-lg text-gray-200">
        Anwesha, the annual cultural fest of IIT Patna, brings you Nukkad Natak —
        a high-energy street theatre competition. Step into the circle, captivate
        the crowd, and make your message impossible to ignore.
      </p>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">RULES</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-200">
          <li>Team Size: 10–20 participants</li>
          <li>Performance Time: Max 20 minutes (penalties for exceeding)</li>
          <li>Language: Hindi (slang from other languages permitted)</li>
          <li>Registration: Online</li>
          <li>Script: Original or well-adapted allowed</li>
          <li>No mics, speakers, or electronic instruments</li>
          <li>Teams bring their own props and costumes</li>
          <li>Fire and water props are prohibited</li>
          <li>Content must be respectful and non-vulgar</li>
          <li>Only bona fide students allowed (carry ID)</li>
          <li>Judges’ verdict is final and binding</li>
        </ul>
      </div>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">JUDGING CRITERIA</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Script & Originality</li>
          <li>Acting, Energy & Voice</li>
          <li>Direction & Flow</li>
          <li>Creativity & Impact</li>
        </ul>
      </div>

      <p className="text-[#ffcc7a] font-semibold mt-8">
        📝 Note: The organizing committee reserves the right to make last-minute changes.
      </p>

      <p className="text-[#ffcc7a] font-semibold mt-4">
        🏆 Prize: Exclusive Anwesha ’26 merchandise, free fest entry & 1-year JioSaavn subscription.
      </p>
    </MulticityThemeWrapper>
  );
}
