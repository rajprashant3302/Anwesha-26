// src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayouts from "../layout/index";
import RegisterPage from "../pages/register/RegisterPage";
import LoginPage from "../pages/login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import EventList from "../pages/events/EventList";
import EventPage from "../pages/events/EventPage";
import AddMembersPage from "../pages/events/AddMembersPage";
import Home from "../pages/HomePage/HomePage";
import DecodeQr from "../Verification/DecodeQr";
import EventCard from "../pages/events/EventCard";

import NukkadNatak from "../pages/events/NukkadNatak";
import Syngphony from "../pages/events/Syngphony";
import BanarasGotTalent from "../pages/events/BanarasGotTalent";
import VibeAnwesha from "../pages/events/VibeAnwesha";
import MemeChallenge from "../pages/events/MemeChallenge";
import DanceEvent from "../pages/events/DanceEvent";

import Abt from "../pages/Abt/Abt";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: "/",
        element: (
          <AuthLayouts>
            <Home />
          </AuthLayouts>
        ),
      },
      {
        path: "register",
        element: (
          <AuthLayouts>
            <RegisterPage />
          </AuthLayouts>
        ),
      },
      {
        path: "about",
        element: (
          <AuthLayouts>
            <Abt />
          </AuthLayouts>
        ),
      },
      {
        path: "login",
        element: (
          <AuthLayouts>
            <LoginPage />
          </AuthLayouts>
        ),
      },
  
      {
        path: "events",
        element: (
          <AuthLayouts>
            <EventList />
          </AuthLayouts>
        ),
      },
      {
        path: "event/:id",
        element: (
          <AuthLayouts>
            <EventPage />
          </AuthLayouts>
        ),
      },
      {
        path: "dashboard",
        element: (
          <AuthLayouts>
            <DashboardPage />
          </AuthLayouts>
        ),
      },
      {
        path: "event/:id/add-members",
        element: (
          <AuthLayouts>
            <AddMembersPage />
          </AuthLayouts>
        ),
      },
      {
        path: "verify",
        element: (
          <AuthLayouts>
            <DecodeQr />
          </AuthLayouts>
        ),
      },
   

      {
        path: "events/nukkad-natak",
        element: (
          <AuthLayouts>
            <NukkadNatak />
          </AuthLayouts>
        ),
      },
      {
        path: "/events/dance",
        element: (
          <AuthLayouts>
            <DanceEvent />
          </AuthLayouts>
        ),
      },

      {
        path: "events/syngphony",
        element: (
          <AuthLayouts>
            <Syngphony />
          </AuthLayouts>
        ),
      },
      {
        path: "events/banaras-got-talent",
        element: (
          <AuthLayouts>
            <BanarasGotTalent />
          </AuthLayouts>
        ),
      },
      {
        path: "events/vibe-anwesha",
        element: (
          <AuthLayouts>
            <VibeAnwesha />
          </AuthLayouts>
        ),
      },
      {
        path: "events/meme-challenge",
        element: (
          <AuthLayouts>
            <MemeChallenge />
          </AuthLayouts>
        ),
      },
    ],
  },
]);

export default router;
