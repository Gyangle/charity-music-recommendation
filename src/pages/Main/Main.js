import { useState, useEffect } from "react";

import { API } from "aws-amplify";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Button, TextField, Stack, Paper, Box } from "@mui/material";

export default function Main() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <SearchBar />
      <LyricsRecDisplay />
    </div>
  );
}

const SearchBar = () => {
  return (
    <Box sx={{ m: 3 }}>
      <Stack direction="row" spacing={2}>
        <TextField label="Song Title" />
        <TextField label="Artist" />
        <Button variant="contained">Search</Button>
      </Stack>
    </Box>
  );
};

const LyricsRecDisplay = () => {
  return (
    <Box sx={{ m: 3 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        <Paper elevation={2} sx={{ width: "40%", height: "75%" }}>
          <p>Display Lyrics</p>
        </Paper>
        <Paper elevation={2} sx={{ width: "50%" }}>
          <AmplifyBackendTesting></AmplifyBackendTesting>
          <p>Charity Cards</p>
        </Paper>
      </Stack>
    </Box>
  );
};

const AmplifyBackendTesting = () => {
  const [mes, setMes] = useState("");

  useEffect(() => {
    fetchTestingAPI();
  }, []);

  const fetchTestingAPI = async () => {
    const apiRes = await API.get("testing", "/testing");
    setMes(apiRes);
  };

  return (
    <p>
      {mes.success} on {mes.url}
    </p>
  );
};
