import React  from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Repos from "./components/repos.jsx";
import Repoview from "./components/repoview.jsx";
import Unknown from "./components/404.jsx";
import "./styles/app.css";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Repos />} />
        <Route path="/repos" element={<Outlet />} >
        <Route path=":id" element={<Repoview/>} />
        </Route>
        <Route path="*" element={<Unknown/>}/>
      </Routes>
    </>
  );
}

export default App;
