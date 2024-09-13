import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import MentionsLegales from '../pages/mentions/MentionsLegales';
import Error from '../pages/error/Error';



const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="*" element={<Error />} />
      </Routes>
  );
}

export default AppRoutes;
