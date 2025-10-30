import React from "react";
import MulticityThemeWrapper from "../../components/MulticityThemeWrapper";

export default function Syngphony() {
  return (
    <MulticityThemeWrapper
      title="🎶 Syngphony – Music Event"
      subtitle="The Musical Extravaganza by Anwesha"
    >
      {/* Introduction */}
      <p className="text-lg text-gray-200 leading-relaxed">
        “Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.”
      </p>
      <p className="text-lg text-gray-200 leading-relaxed mt-4">
        Step into <b>Syngphony</b> — a celebration of sound and soul! Immerse yourself in the rhythm of melodies, 
        harmonies, and emotions as musicians create magic that transcends every boundary. Syngphony is not just another 
        singing competition; it’s a melodic tapestry of musical freedom. By removing traditional genre barriers, it paves 
        the way for artists to explore, innovate, and express their unique musical essence without constraint.
      </p>

      {/* SOLO PERFORMANCE */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">SOLO PERFORMANCE</h2>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mb-2">Time Limit</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Duration: Up to 6 minutes (inclusive of soundcheck)</li>
          <li>Exceeding the time limit will result in penalties.</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">Guidelines</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Bring your own musical instruments (if required).</li>
          <li>Only acoustic or percussion accompaniment (maximum 1) is allowed.</li>
          <li>The singer may also play the instrument, but no additional accompanist will be permitted in that case.</li>
          <li>No electronic instruments will be provided.</li>
          <li>Karaoke or recorded tracks are allowed only if no instrument is used during the performance.</li>
          <li>Backing tracks must be in .mp3 format and submitted via pen drive and uploaded to the Google Drive link provided in the registration form.</li>
          <li>Digital Tanpura is permitted with any form of accompaniment.</li>
          <li>Participants cannot refer to lyrics during performance.</li>
          <li>Use of fire, water, vulgar language, or gestures is strictly prohibited — maintain stage decorum.</li>
          <li>No restriction on language — perform in any style (Western, Classical, or Light Music).</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">Judging Criteria</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Song Selection – 30%</li>
          <li>Taal / Rhythm Sense – 30%</li>
          <li>Sur / Melody – 30%</li>
          <li>Overall Impact – 10%</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">Penalty</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Exceeding the time limit incurs a deduction of 10 marks per minute.</li>
          <li>After the 7th minute, the participant will be asked to leave the stage.</li>
        </ul>
      </div>

      {/* DUET PERFORMANCE */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">DUET PERFORMANCE</h2>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mb-2">Time Limit</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Duration: Up to 10 minutes (inclusive of soundcheck)</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">Team Composition</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Any one of the following combinations:</li>
          <ul className="list-disc ml-10">
            <li>Two vocalists, or</li>
            <li>One vocalist + one instrumentalist</li>
          </ul>
          <li>Participants may perform in both Solo and Duet categories.</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">Guidelines</h3>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Bring your own instruments (if needed). No electronic instruments will be provided.</li>
          <li>Backing tracks must be in .mp3 format — submit via pen drive and upload to the Google Drive link shared during registration.</li>
          <li>Maintain decorum — no inappropriate language or gestures.</li>
        </ul>

        <h3 className="text-2xl text-[#ffcc7a] font-semibold mt-6 mb-2">Judging Criteria</h3>
        <p className="text-gray-200 italic mb-2">For Vocalist–Vocalist Duet:</p>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Song Selection – 30%</li>
          <li>Taal / Rhythm Sense – 30%</li>
          <li>Sur / Melody – 30%</li>
          <li>Overall Impact – 10%</li>
        </ul>

        <p className="text-gray-200 italic mt-4 mb-2">For Vocalist–Instrumentalist Duet:</p>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Sur / Melody – 30%</li>
          <li>Taal / Rhythm Sense – 30%</li>
          <li>Instrumental Quality – 30%</li>
          <li>Overall Impact – 10%</li>
        </ul>
      </div>

      {/* General Rules */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-4">GENERAL RULES</h2>
        <ul className="list-disc ml-6 text-gray-200 space-y-2">
          <li>Judges’ decisions will be final and binding.</li>
          <li>Respect the time slots and maintain professional conduct on stage.</li>
          <li>
            The organizing team reserves the right to disqualify participants for any misconduct or rule violations.
          </li>
        </ul>
      </div>

      {/* Closing */}
      <div className="bg-black/50 p-6 rounded-xl mt-10 border border-[#ffcc7a]/20">
        <h2 className="text-3xl font-bold text-[#ffcc7a] mb-2">LET THE MUSIC SPEAK!</h2>
        <p className="text-gray-200">
          🎵 Feel the rhythm. Find your voice. Create magic on stage. <br />
          <b>Syngphony</b> — where every beat tells a story, and every note breathes life into the moment.
        </p>
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
