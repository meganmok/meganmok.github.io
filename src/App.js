import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
          <Route exact path='/' element={<Nav />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
