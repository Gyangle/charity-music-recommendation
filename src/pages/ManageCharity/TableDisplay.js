import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function TableDisplay({charities, deleteCharity}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {charities.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell> {row.name}</TableCell>
              <TableCell> {row.description}</TableCell>
              <TableCell><Button variation="link" onClick={() => deleteCharity(row)}>
                Delete note
              </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
