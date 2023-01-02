import { useState, useEffect, useReducer } from "react";
import {
  Button,
  Stack,
  TextField,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import TableDisplay from "./TableDisplay";

// graphQL
import { listCharities } from "./../../graphql/queries";
import {
  createCharity as createCharityMutation,
  deleteCharity as deleteCharityMutation,
} from "./../../graphql/mutations";
import { API } from "aws-amplify";

export default function ManageCharity() {
  const [charities, setCharities] = useState([]);
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      description: "",
    }
  );

  useEffect(() => {
    fetchCharities();
  }, []);

  const fetchCharities = async () => {
    const apiData = await API.graphql({ query: listCharities });
    const charitiesFromAPI = apiData.data.listCharities.items;
    setCharities(charitiesFromAPI);
  };

  const deleteCharity = async ({ id }) => {
    const newCharities = charities.filter((note) => note.id !== id);
    setCharities(newCharities);
    await API.graphql({
      query: deleteCharityMutation,
      variables: { input: { id } },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.graphql({
      query: createCharityMutation,
      variables: { input: formInput },
    });
    fetchCharities();
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <div>
      <Paper sx={{ m: 3, p: 3 }}>
        <Typography variant="h3">Manage Charity</Typography>
        <Typography variant="p">CRUD the charity database.</Typography>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
            Add Charity
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
              <TextField label="Name" name="name" onChange={handleInput} />
              <TextField
                label="Description"
                id="margin-normal"
                name="description"
                onChange={handleInput}
              />
            </Stack>

            <Button
              sx={{ mt: 1 }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Create
            </Button>
          </form>
        </Box>
        <Box sx={{ mt: 5 }} >
          <TableDisplay charities={charities} deleteCharity={deleteCharity}/>
        </Box>
        
      </Paper>
    </div>
  );
}
