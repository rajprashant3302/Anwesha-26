// src/pages/events/AddMembersPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../events/EventList";
import { useAuthUser } from "../../context/AuthUserContext";  // ✅ Import context

export default function AddMembersPage() {
  const { id } = useParams();
  const event = events.find((e) => e.id.toString() === id);

  const { handleSearchByAnweshaId } = useAuthUser();  // ✅ Get search function from context

  const [searchId, setSearchId] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchId) return;
    setLoading(true);
    try {
      const user = await handleSearchByAnweshaId(searchId);  // ✅ Search from DB
      setFoundUser(user || null);
    } catch (error) {
      console.error("Search error:", error);
      setFoundUser(null);
    }
    setLoading(false);
  };

  const handleAdd = () => {
    if (foundUser && !team.some((t) => t.anweshaId === foundUser.anweshaId)) {
      setTeam([...team, foundUser]);
      setFoundUser(null);
      setSearchId("");
    }
  };

  if (!event) return <h2 className="text-center mt-10">Event not found</h2>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Add Team Members for {event.name}
      </h1>
      <p className="text-gray-600">
        Min: {event.minTeamSize}, Max: {event.maxTeamSize}
      </p>

      {/* Search Box */}
      <div className="flex mt-4 gap-2">
        <input
          type="text"
          placeholder="Enter Anwesha ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Search Result */}
      {foundUser ? (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <p>
            <strong>{foundUser.name}</strong>
          </p>
          <p>{foundUser.email}</p>
          <p>ID: {foundUser.anweshaId}</p>
          <button
            onClick={handleAdd}
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
            disabled={team.length >= event.maxTeamSize - 1}
          >
            Add to Team
          </button>
        </div>
      ) : (
        searchId && !loading && (
          <p className="mt-4 text-red-500">
            No user found with ID {searchId}
          </p>
        )
      )}

      {/* Team List */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Team Members</h2>
        {team.length === 0 ? (
          <p className="text-gray-500">No members added yet.</p>
        ) : (
          <ul className="list-disc ml-5">
            {team.map((m) => (
              <li key={m.anweshaId}>
                {m.name} ({m.anweshaId})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
