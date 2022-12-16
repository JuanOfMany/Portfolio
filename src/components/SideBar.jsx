import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink
} from "react-router-dom";

export default function SideBar () {

  return (
    <div id="sidebar">
    <div>
      <h1>Juan Pinol</h1>
    </div>
    <div>
    <RouterLink to="/">
      <button>Home</button>
    </RouterLink>
    <RouterLink to="/miata">
      <button>Miata</button>
    </RouterLink>
    <RouterLink to="/aboutme">
      <button>About Me</button>
    </RouterLink>
    <RouterLink to="/techstack">
      <button>Tech Stack</button>
    </RouterLink>
    </div>
  </div>
  )
}