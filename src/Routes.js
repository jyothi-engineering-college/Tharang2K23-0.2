import React, { Fragment, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const Gallery = React.lazy(() => import("./pages/Gallery/Gallery"))
const TechnicalDetail = React.lazy(() => import("./pages/TechnicalDetail/TechnicalDetail"))
const HackathonDetail = React.lazy(() => import("./pages/HackathonDetail/HackathonDetail"))
const TalkDetail = React.lazy(() => import("./pages/TalkDetail/TalkDetail"))
const Technical = React.lazy(() => import("./pages/Technical/Technical"))
const Hackathon = React.lazy(() => import("./pages/Hackathon/Hackathon"))
const Games = React.lazy(() => import("./pages/Games/Games"))
const Talk = React.lazy(() => import("./pages/Talk/Talk"))
const GamesDetail = React.lazy(() => import("./pages/GamesDetail/GamesDetail"))
const EventPage = React.lazy(() => import("./pages/EventPage/EventPage"))
const Tickets = React.lazy(() => import("./pages/Tickets/Tickets"))


const AD = React.lazy(() => import("./pages/AD/AD"))
const AdDetail = React.lazy(() => import("./pages/AdDetail/AdDetail"))
const BSH = React.lazy(() => import("./pages/BSH/BSH"))
const BshDetail = React.lazy(() => import("./pages/BshDetail/BshDetail"))
const CE = React.lazy(() => import("./pages/CE/CE"))
const CeDetail = React.lazy(() => import("./pages/CeDetail/CeDetail"))
const CSE = React.lazy(() => import("./pages/CSE/CSE"))
const CseDetail = React.lazy(() => import("./pages/CseDetail/CseDetail"))
const ECE = React.lazy(() => import("./pages/ECE/ECE"))
const EceDetail = React.lazy(() => import("./pages/EceDetail/EceDetail"))
const EEE = React.lazy(() => import("./pages/EEE/EEE"))
const EeeDetail = React.lazy(() => import("./pages/EeeDetail/EeeDetail"))
const ME = React.lazy(() => import("./pages/ME/ME"))
const MeDetail = React.lazy(() => import("./pages/MeDetail/MeDetail"))
const MR = React.lazy(() => import("./pages/MR/MR"))
const MrDetail = React.lazy(() => import("./pages/MrDetail/MrDetail"))
const RA = React.lazy(() => import("./pages/RA/RA"))
const RaDetail = React.lazy(() => import("./pages/RaDetail/RaDetail"))
const MyRoutes = () => {
  return (
    <Fragment>
      <Header />
      <main>
          <Routes>
            <Route path="/home" element={<App />} />
            <Route path="/" element={<Navigate to="home" />} />
            <Route exact path="/events/*" element={<EventPage />}>
              <Route exact path="AD" element={<AD />} />
              <Route exact path="BSH" element={<BSH />} />
              <Route exact path="CE" element={<CE />} />
              <Route exact path="CSE" element={<CSE />} />
              <Route exact path="ECE" element={<ECE />} />
              <Route exact path="EEE" element={<EEE />} />
              <Route exact path="ME" element={<ME />} />
              <Route exact path="MR" element={<MR />} />
              <Route exact path="RA" element={<RA />} />
              <Route exact path="technical" element={<Technical />} />
              <Route exact path="hackathon" element={<Hackathon />} />
              <Route exact path="games" element={<Games />} />
              <Route path="talk" element={<Talk />} />
            </Route>
            <Route path="/events" element={<Navigate to="CSE" />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events/technical/:id" element={<TechnicalDetail />} />
            <Route path="/events/hackathon/:id" element={<HackathonDetail />} />
            <Route path="/events/games/:id" element={<GamesDetail />} />
            <Route path="/events/talk/:id" element={<TalkDetail />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/events/AdDetail/:id" element={<AdDetail />} />
            <Route path="/events/BshDetail/:id" element={<BshDetail />} />
            <Route path="/events/CeDetail/:id" element={<CeDetail />} />
            <Route path="/events/CseDetail/:id" element={<CseDetail />} />
            <Route path="/events/EceDetail/:id" element={<EceDetail />} />
            <Route path="/events/EeeDetail/:id" element={<EeeDetail />} />
            <Route path="/events/MeDetail/:id" element={<MeDetail />} />
            <Route path="/events/MrDetail/:id" element={<MrDetail />} />
            <Route path="/events/RaDetail/:id" element={<RaDetail />} />
          </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};

export default MyRoutes;
