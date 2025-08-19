// src/components/EventList.jsx
import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    id: 1,
    name: "Tech Fest 2025",
    date: "20th Aug 2025",
    shortDescription: "A fest of innovation and ideas",
    description: "Full description of the Tech Fest event goes here...",
    image: "https://tse2.mm.bing.net/th/id/OIP.8f81qAbZxXmbtdi6Uve0bwHaEK?pid=Api&P=0&h=180",
    price: 500,
  },
  {
    id: 2,
    name: "Music Night",
    date: "25th Aug 2025",
    shortDescription: "An evening of melodies",
    description: "Enjoy performances by top artists...",
    image: "https://tse3.mm.bing.net/th/id/OIP.ejVoU7mLTLPQslj_Az8DEwHaEO?pid=Api&P=0&h=180",
    price: 300,
  },
];

export default function EventList() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export { events };