import { useState, useEffect } from "react";
import "./App.css";

// aws amplify config
import { Amplify, API } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

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
  const [mes, setMes] = useState("");

  useEffect(() => {
    fetchTestingAPI();
  }, []);

  const fetchTestingAPI = async () => {
    const apiRes = await API.get("testing", "/testing");
    setMes(apiRes)
    console.log("asdfa")
  };

  return <p>{mes.success} on {mes.url}</p>;
};