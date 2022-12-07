import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header/>
        <div id="cBody">
          <Routes>
            <Route path="/" element={<Home/>}>1</Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
