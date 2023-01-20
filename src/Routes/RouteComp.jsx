import React from 'react';
import { Routes, Route } from "react-router-dom";
import ArticlePage from '../pages/ArticlePage';
import Bollywood from '../pages/Bollywood';
import Sports from '../pages/Sports';
import Health from '../pages/Health';
import Hollywood from '../pages/Hollywood';
import Home from '../pages/Home';
import Technology from '../pages/Technology';

const RouteComp = ({setProgress}) => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="Bollywood" element={<Bollywood setProgress={setProgress} />} />
          <Route path="Technology" element={<Technology setProgress={setProgress} />} />
          <Route path="Hollywood" element={<Hollywood setProgress={setProgress} />} />
          <Route path="Sports" element={<Sports setProgress={setProgress} />} />
          <Route path="Health" element={<Health setProgress={setProgress} />} />
          <Route path="ArticlePage" element={<ArticlePage />} />
        </Routes>
      </>
    );
}

export default RouteComp;