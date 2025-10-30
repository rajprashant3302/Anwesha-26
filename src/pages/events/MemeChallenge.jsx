import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function MemeChallenge() {
  return (
    <MulticityThemeWrapper
      title="😂 Meme Creation Challenge"
      subtitle="Creativity Meets Humor"
    >
      <p className="text-lg text-gray-200">
        Create witty, relatable memes that match the announced theme — show off
        your humor and originality in this light-hearted creative competition.
      </p>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">RULES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Open to all college students (individual only)</li>
          <li>Max 2 entries per participant</li>
          <li>Image format: .jpg/.png | 1080×1080px | max 5MB</li>
          <li>Language: English or Hindi</li>
          <li>No offensive or plagiarized content</li>
        </ul>
      </div>

      <div className="bg-black/50 p-6 rounded-xl mt-8">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">JUDGING CRITERIA</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Creativity & Humor – 40%</li>
          <li>Relevance to Theme – 30%</li>
          <li>Originality – 20%</li>
          <li>Presentation & Clarity – 10%</li>
        </ul>
      </div>

      <p className="text-[#ffcc7a] font-semibold mt-8">
        🏆 Prizes: Top 3 winners get exclusive Anwesha ’26 merch, fest entry & JioSaavn subscription.
      </p>
    </MulticityThemeWrapper>
  );
}
