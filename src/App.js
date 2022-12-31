import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <LyricsDiaplay />
      <AmplifyBackendTesting />
    </div>
  );
}

const Header = () => {
  return <p>Search Bar</p>;
};

const LyricsDiaplay = () => {
  return <p>Display Lyrics</p>;
};

const AmplifyBackendTesting = () => {
  return <p>Backend</p>
}