// src/components/EventList.jsx
import React from "react";
import EventCard from "./EventCard";
import Slider from "react-slick";
import { useState,useEffect } from "react";
// Import CSS for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your custom card styles
import "../../../src/components/CardSlider.css";

const events = [
  {
    id: "tech_fest",
    name: "Tech Fest 2025",
    date: "20th Aug 2025",
    shortDescription: "A fest of innovation and ideas",
    description: "Full description of the Tech Fest event goes here...",
    image: "https://tse2.mm.bing.net/th/id/OIP.8f81qAbZxXmbtdi6Uve0bwHaEK?pid=Api&P=0&h=180",
    card_bg: "/anime_girl_black.jpg",
    price: 500,
    minTeamSize: 1,
    maxTeamSize: 1,
  },
  {
    id: "music_night",
    name: "Music Night",
    date: "25th Aug 2025",
    shortDescription: "An evening of melodies",
    description: "Enjoy performances by top artists...",
    image: "https://tse3.mm.bing.net/th/id/OIP.ejVoU7mLTLPQslj_Az8DEwHaEO?pid=Api&P=0&h=180",
    card_bg: "/smiling_joker_1.jpg",
    price: 300,
    minTeamSize: 3,
    maxTeamSize: 4,
  },
  {
    id: "comedy_night",
    card_bg: "/skull_black.jpg",
    name: "Comedy Night",
    date: "28th Aug 2025",
    shortDescription: "Stand-up comedy show",
    description: "Full description of the comedy event goes here...",
    image: "https://tse3.mm.bing.net/th/id/OIP.ejVoU7mLTLPQslj_Az8DEwHaEO?pid=Api&P=0&h=180",
    price: 400,
    minTeamSize: 1,
    maxTeamSize: 1,
  },
   {
    id: "god_fight",
    name: "GOD FIGHT 2025",
    date: "20th Aug 2025",
    shortDescription: "A fest of innovation and ideas",
    card_bg: "/joker_guitar.jpg",
    description: "Full description of the Tech Fest event goes here...",
    image: "https://tse2.mm.bing.net/th/id/OIP.8f81qAbZxXmbtdi6Uve0bwHaEK?pid=Api&P=0&h=180",
    price: 500,
    minTeamSize: 1,
    maxTeamSize: 1,
  },
];

export default function EventList() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Function to detect screen width
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 600) setSlidesToShow(1);      // Small screens
    else if (width < 1024) setSlidesToShow(2); // Medium screens
    else setSlidesToShow(3);                  // Large screens
  };

  useEffect(() => {
    updateSlidesToShow(); // Set initial value on load
    window.addEventListener("resize", updateSlidesToShow); // Update on resize
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
  <div className="p-6 bg-[url('/bg_cropped.jpg')]  bg-cover min-h-screen ">
    {/* <section className="flex flex-col items-center justify-center text-center px-6">
      <h2 className="text-[#703612] font-[SFIronsides] text-7xl md:text-8xl mt-[7vh]">
        ANWESHA'26
      </h2>

      <h1 className="font-[SFIronsides] text-9xl md:text-9xl text-[#703612] -translate-y-8 md:tr
      anslate-y-[15vh] mt-[3vh]">
        MULTICITY
      </h1>
    </section> */}
  
    <h2 className="text-7xl md:text-7xl font-bold text-center text-[#703612] my-12 mt-[38vh] md:mt-[64vh]">
      EVENTS
    </h2>

    <div className="overflow-hidden">
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={event.id} className="pt-20">
            <div className="card ">
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
