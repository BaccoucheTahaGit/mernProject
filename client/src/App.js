import React, { useState } from "react";
import './App.css';
import Topics from "./components/Topics/Topics";
import BlogPosts from "./components/BlogPosts/BlogPosts"
import { Link } from 'react-router-dom';
import Logo from './images/TravelBrain.png';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  document.body.className = isDarkMode ? "dark-mode" : "";

  return (
    <div>
       <header>
        <nav>
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </div>
        
          <Link to="/BlogPosts" className="add-blog">
  Add a Blog
</Link>

          <div className="profile-dropdown">
            <button className="profile-dropbtn">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png" alt="Profile" />
            </button>
            <div className="profile-dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </nav>
      </header>
    

     
      <Topics></Topics>
    </div>
    
  );
}

export default App;
