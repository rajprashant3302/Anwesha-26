import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { HiOutlineDownload } from 'react-icons/hi';
export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const textToType = "M ULTICITY";

  useEffect(() => {
    let charIndex = 0;
    
    // Typing effect
    const typingInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        setTypedText((prev) => prev + textToType.charAt(charIndex));
        charIndex++;
      } else {
        // Clear both intervals once typing is complete
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
        setShowCursor(false); // Hide the cursor permanently
      }
    }, 200); // Adjust typing speed here (in milliseconds)

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Adjust cursor blink speed

    // Cleanup function
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[url('/bg_2_cropped.jpg')] bg-cover bg-left">
      {/* <button className="mt-11  mx-auto  border-2 py-1 px-2 text-xl rounded-xl w-fit flex flex-nowrap items-center gap-2  bg-[#6d41b3] border-[#A36EF6]">< HiOutlineDownload className="translate-y-[-1px]" /> Get receipt</button> */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 -translate-y-24 md:-translate-y-0">
        <h2 className="mx-auto text-[#703612] scale-90 md:scale-100 font-[SFIronsides] text-[5rem] md:text-[9rem] lg:text-[9rem] -translate-y-24 md:-translate-y-12 h-fit">
          ANWESHA'26<br />
        </h2>

        <h1 className="mx-auto font-[SFIronsides] text-[6rem] md:text-[13rem] lg:text-[13rem] text-[#703612] h-fit translate-y-[-18vh]">
          {typedText}
          {/* Only show the cursor if showCursor is true */}
          {showCursor && (
            <span className="transition-opacity duration-300">|</span>
          )}
        </h1>
      </section>
    </div>
  );
}