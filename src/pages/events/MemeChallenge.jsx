import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function MemeChallenge() {
  return (
    <MulticityThemeWrapper
      title="🤣 Meme Creation Challenge"
      subtitle="Where Creativity Meets Humor"
    >
      {/* Event Info */}
      <div className="bg-black/50 p-6 rounded-xl border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-2">Event Details</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>📅 <b>Event Mode:</b> Online</li>
          <li>🎯 <b>Theme:</b> Creativity Meets Humor</li>
          <li>💬 <b>Objective:</b> Create original memes that are witty, relatable, and relevant to the given theme.</li>
        </ul>
      </div>

      {/* Eligibility */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">1. ELIGIBILITY</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Open to all college students across India.</li>
          <li>Individual participation only (no teams).</li>
          <li>No registration fee.</li>
        </ul>
      </div>

      {/* Submission Guidelines */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">2. SUBMISSION GUIDELINES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>
            <b>Theme Announcement:</b> Theme will be revealed on [Insert Date] via email & social media handles.
          </li>
          <li>
            <b>Format:</b>
            <ul className="list-disc ml-8 mt-1 space-y-1">
              <li>Image memes only (.jpg / .png)</li>
              <li>Minimum resolution: 1080×1080 px</li>
              <li>Maximum file size: 5 MB</li>
            </ul>
          </li>
          <li>Number of Entries: Maximum 2 memes per participant.</li>
          <li>
            <b>Originality:</b> Memes must be self-created. Use of meme templates is allowed, but captions must be original.
          </li>
          <li>
            <b>Language:</b> English or Hindi (avoid slang/abusive words).
          </li>
          <li>
            <b>Submission Method:</b> Upload via Google Form link provided post-registration.
          </li>
          <li>
            <b>Deadline:</b> All submissions must be made before [Insert Date, Time]. Late entries will not be considered.
          </li>
        </ul>
      </div>

      {/* Rules */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">3. RULES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>
            Content must be non-offensive — avoid targeting religion, caste, gender, or any individual personally.
          </li>
          <li>No plagiarism — copied memes will be disqualified immediately.</li>
          <li>
            Organizers reserve the right to reject any submission violating rules.
          </li>
          <li>Memes must align with the announced theme.</li>
        </ul>
      </div>

      {/* Judging Criteria */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">4. JUDGING CRITERIA</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Creativity & Humor – 40%</li>
          <li>Relevance to Theme – 30%</li>
          <li>Originality – 20%</li>
          <li>Presentation & Clarity – 10%</li>
        </ul>
      </div>

      {/* Note */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">5. NOTE</h2>
        <p className="text-gray-200">
          The organizing committee reserves the right to make any last minute change in the rules.
        </p>
      </div>

      {/* Prizes */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">6. PRIZES</h2>
        <p className="text-gray-200">
          The top 3 winners will receive exclusive <b>Anwesha ‘26 merchandise</b>, free entry to the fest, 
          and a complimentary <b>1-year JioSaavn subscription</b>.
        </p>
      </div>
    </MulticityThemeWrapper>
  );
}
