import React from 'react';
import AppRoutes from './components/rooter/AppRootes';
import Navbar from './components/organisms/navbar/Navbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRoutes />
    </div>
  );
}

export default App;
