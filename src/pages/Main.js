import { useState, useEffect } from "react";

import { API } from 'aws-amplify';

export default function Main() {
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
  };

  return <p>{mes.success} on {mes.url}</p>;
};