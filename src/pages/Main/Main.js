import { useState, useEffect } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import {
  Button,
  TextField,
  Stack,
  Paper,
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { API } from "aws-amplify";
import { listCharities } from "./../../graphql/queries";

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
        alignItems="flex-start"
        spacing={2}
      >
        <Paper elevation={2} sx={{ width: "100%", minHeight: "84vh" }}>
          <Typography>Display Lyrics</Typography>
        </Paper>
        <Box sx={{ width: "100%" }}>
          <RecDisplay />
        </Box>
      </Stack>
    </Box>
  );
};

const RecDisplay = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    fetchCharities();
  }, []);

  const fetchCharities = async () => {
    const apiData = await API.graphql({ query: listCharities });
    const charitiesFromAPI = apiData.data.listCharities.items;
    setCharities(charitiesFromAPI);
  };

  const CharityCard = ({ charityInfo }) => {
    return (
      <Card sx={{ minWidth: 275, mb: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {charityInfo.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {charityInfo.group}
          </Typography>
          <Typography variant="body2">{charityInfo.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  };

  return charities.map((charityInfo) => (
    <CharityCard key={charityInfo.id} charityInfo={charityInfo} />
  ));
};
