import React from "react";
//Routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NameList from "./Components/Pages/NameList/NameList.jsx";
import HeaderBar from "./Components/HeaderBar/HeaderBar.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";



function App() {
  return(
    <div>
      <BrowserRouter>
      <HeaderBar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Routes>
          <Route path="/NameList" element={<NameList />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
