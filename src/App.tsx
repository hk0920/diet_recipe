import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/Header';
import { Detail } from './pages/Detail';
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
