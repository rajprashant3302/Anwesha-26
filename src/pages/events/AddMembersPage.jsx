// src/pages/events/AddMembersPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { events } from "../events/EventList";
import { useAuthUser } from "../../context/AuthUserContext";
import Razorpay from "../../services/Razorpay";

export default function AddMembersPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const event = events.find((e) => e.id.toString() === id);

  const { currentUser, handleSearchByAnweshaId, loading } = useAuthUser();

  const [searchId, setSearchId] = useState("");
  const [foundUser, setFoundUser] = useState(null);
  const [team, setTeam] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [warning, setWarning] = useState("");

  // ✅ Auto-fetch current user on page load
  useEffect(() => {
    if (!loading) {
      if (!currentUser) {
        // redirect to login with "from" state
        navigate("/login", { state: { from: location.pathname } });
        return;
      }

      // Add current user to team if not already added
      if (!team.some((t) => t.anweshaId === currentUser.anweshaId)) {
        setTeam([currentUser]);
      }
    }
  }, [currentUser, loading, navigate, team, location.pathname]);

  const handleSearch = async () => {
    if (!searchId) return;
    setSearchLoading(true);
    setWarning("");
    try {
      const user = await handleSearchByAnweshaId(searchId);
      setFoundUser(user || null);
    } catch (error) {
      console.error("Search error:", error);
      setFoundUser(null);
    }
    setSearchLoading(false);
  };

  const handleAdd = () => {
    if (!foundUser) return;

    // Check for duplicate
    if (team.some((t) => t.anweshaId === foundUser.anweshaId)) {
      setWarning(`${foundUser.firstName} ${foundUser.lastName} is already in the team!`);
      return;
    }

    // Check for max team size
    if (team.length >= event.maxTeamSize) {
      setWarning(`Cannot add more than ${event.maxTeamSize} members.`);
      return;
    }

    setTeam([...team, foundUser]);
    setFoundUser(null);
    setSearchId("");
    setWarning("");
  };

  const handleRemove = (anweshaId) => {
    setTeam(team.filter((member) => member.anweshaId !== anweshaId));
  };

  if (!event) return <h2 className="text-center mt-10">Event not found</h2>;

  if (loading || !currentUser) {
    return <div className="text-center mt-10">Checking authentication...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 ">
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
          {searchLoading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* Warning */}
      {warning && <p className="mt-2 text-red-500">{warning}</p>}

      {/* Search Result */}
      {foundUser ? (
        <div className="mt-4 p-3 border rounded bg-gray-50">
          <p>
            <strong>{foundUser.firstName} {foundUser.lastName}</strong>
          </p>
          <p>{foundUser.email}</p>
          <p>ID: {foundUser.anweshaId}</p>
          <button
            onClick={handleAdd}
            className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
          >
            Add to Team
          </button>
        </div>
      ) : (
        searchId && !searchLoading && (
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
              <li key={m.anweshaId} className="flex justify-between items-center">
                <span>{m.firstName} {m.lastName} ({m.anweshaId})</span>
                {m.anweshaId !== currentUser.anweshaId && (
                  <button
                    onClick={() => handleRemove(m.anweshaId)}
                    className="ml-4 bg-red-600 text-white px-2 py-1 rounded text-sm"
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Razorpay Button */}
      {(team.length >= event.minTeamSize &&
        team.length <= event.maxTeamSize) && (
        <div className="mt-6">
          <Razorpay event={event} team={team} />
        </div>
      )}

      {/* Team Details Table */}
      {team.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Team Details</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2">#</th>
                <th className="border border-gray-300 px-3 py-2">Name</th>
                <th className="border border-gray-300 px-3 py-2">Email</th>
                <th className="border border-gray-300 px-3 py-2">Anwesha ID</th>
                <th className="border border-gray-300 px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member, index) => (
                <tr key={member.anweshaId} className="text-center">
                  <td className="border border-gray-300 px-3 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-3 py-2">{member.firstName} {member.lastName}</td>
                  <td className="border border-gray-300 px-3 py-2">{member.email}</td>
                  <td className="border border-gray-300 px-3 py-2">{member.anweshaId}</td>
                  <td className="border border-gray-300 px-3 py-2">
                    {member.anweshaId !== currentUser.anweshaId && (
                      <button
                        onClick={() => handleRemove(member.anweshaId)}
                        className="bg-red-600 text-white px-2 py-1 rounded text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
