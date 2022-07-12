import './App.css';
import Navbar from './components/navbar';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import Character from './components/character';
import Favorites from './components/favorites';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((state) => state === "dark" ? "light" : "dark");
  }
  return (
    <div className={"App " + theme}>
      <Navbar toggleTheme={toggleTheme} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/character/:characterId" element={<Character />} />
        </Routes>
      </main>
      <footer className="container margin-y-sm" >
        <hr />
        <h3>Project by Andy Nievas</h3>
        <p>This project was part of an interview test.</p>
      </footer>
    </div>
  );
}

export default App;
