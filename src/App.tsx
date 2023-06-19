import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/Header';
import { Detail } from './pages/Detail';
import { DetailUpgrade } from './pages/DetailUpgrade';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header/>
        <div id="cBody">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/detail/:idx" element={<Detail/>}></Route>
            <Route path="/detail-upgrade/:idx" element={<DetailUpgrade/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
