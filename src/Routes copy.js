import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import EventPage from "./pages/EventPage/EventPage";
import AD from "./pages/AD/AD";
import AdDetail from "./pages/AdDetail/AdDetail";
import BSH from "./pages/BSH/BSH";
import BshDetail from "./pages/BshDetail/BshDetail";
import CE from "./pages/CE/CE";
import CeDetail from "./pages/CeDetail/CeDetail";
import CSE from "./pages/CSE/CSE";
import CseDetail from "./pages/CseDetail/CseDetail";
import ECE from "./pages/ECE/ECE";
import EceDetail from "./pages/EceDetail/EceDetail";
import EEE from "./pages/EEE/EEE";
import EeeDetail from "./pages/EeeDetail/EeeDetail";
import ME from "./pages/ME/ME";
import MeDetail from "./pages/MeDetail/MeDetail";
import MR from "./pages/MR/MR";
import MrDetail from "./pages/MrDetail/MrDetail";
import RA from "./pages/RA/RA";
import RaDetail from "./pages/RaDetail/RaDetail";

const MyRoutes = () => {
  return (
    <Fragment>
      <Header />
      <main style={{minHeight:"90vh"}}>
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
         
          </Route>
          <Route path="/events" element={<Navigate to="CSE" />} />
          
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
