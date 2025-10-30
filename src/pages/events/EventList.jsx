import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import Slider from "react-slick";

// Import CSS for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../src/components/CardSlider.css";

// 🟡 Updated: Now includes Multicity event pages with their /events/... routes
const events = [
  {
    id: "nukkad-natak",
    name: "🎭 Nukkad Natak",
    date: "15th Jan 2026",
    shortDescription: "The Streets. The Stage. Your Voice.",
    description: "Street theatre competition – pure energy and impact.",
    image: "/images/nukkad.jpg",
    card_bg: "/anime_girl_black.jpg",
    link: "/events/nukkad-natak",
  },
  {
    id: "dance-event",
    name: "💃 Dance Event",
    date: "16th Jan 2026",
    shortDescription: "Where movement meets expression.",
    image: "/images/dance.jpg",
    card_bg: "/joker_guitar.jpg",
    link: "/events/dance",
  },
  {
    id: "syngphony",
    name: "🎵 Syngphony",
    date: "16th Jan 2026",
    shortDescription: "The musical extravaganza of Anwesha.",
    description: "Solo and duet performances across genres.",
    image: "/images/syngphony.jpg",
    card_bg: "/smiling_joker_1.jpg",
    link: "/events/syngphony",
  },
  {
    id: "banaras-got-talent",
    name: "🎤 Banaras Got Talent",
    date: "17th Jan 2026",
    shortDescription: "Where creativity meets performance.",
    description: "A vibrant showcase of Banaras' artistic spirit.",
    image: "/images/banaras.jpg",
    card_bg: "/skull_black.jpg",
    link: "/events/banaras-got-talent",
  },
  {
    id: "vibe-anwesha",
    name: "📱 Vibe@Anwesha",
    date: "18th Jan 2026",
    shortDescription: "Reel-making challenge capturing fest vibes.",
    description: "Create Instagram reels blending creativity & fest energy.",
    image: "/images/vibe.jpg",
    card_bg: "/joker_guitar.jpg",
    link: "/events/vibe-anwesha",
  },
  {
    id: "meme-challenge",
    name: "😂 Meme Creation Challenge",
    date: "19th Jan 2026",
    shortDescription: "Creativity meets humor.",
    description: "Make witty memes that celebrate the fest spirit.",
    image: "/images/meme.jpg",
    card_bg: "/joker_guitar.jpg",
    link: "/events/meme-challenge",
  },
];

export default function EventList() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Function to detect screen width
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 600) setSlidesToShow(1);
    else if (width < 1024) setSlidesToShow(2);
    else setSlidesToShow(3);
  };

  useEffect(() => {
    updateSlidesToShow(); // Set initial value on load
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <div className="p-6 bg-[url('/bg_cropped.jpg')] bg-cover min-h-screen">
      {/* Title Section */}
      <h2 className="text-7xl md:text-7xl font-bold text-center text-[#703612] my-12 mt-[38vh] md:mt-[64vh]">
        EVENTS
      </h2>

      {/* Slider Section */}
      <div className="overflow-hidden">
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={event.id} className="pt-20">
              <div className="card">
                <EventCard event={event} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export { events };
