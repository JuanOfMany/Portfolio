import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink
} from "react-router-dom";

export default function SideBar () {

  return (
    <div id="sidebar" className="flex-grid">
      <div>
        <h1>Juan Pinol</h1>
      </div>
      <div>
      <RouterLink to="/">
        <button className="col">Home</button>
      </RouterLink>
      <RouterLink to="/miata">
        <button className="col">Miata</button>
      </RouterLink>
      <RouterLink to="/aboutme">
        <button className="col">About Me</button>
      </RouterLink>
      <RouterLink to="/techstack">
        <button className="col">Tech Stack</button>
      </RouterLink>
      </div>
  </div>
  )
}