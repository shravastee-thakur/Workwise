import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Profile = () => {
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <div>
      <div className="max-w-4xl mx-auto  bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow shadow-gray-400">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <div>
              <img
                className="w-[80px] h-[80px] rounded-full"
                src="../public/portrait.jpg"
              />
            </div>
            <div className="flex items-center gap-5">
              <div>
                <h1 className=" font-medium text-xl">fullname</h1>
                <p>bio</p>
              </div>
            </div>
          </div>

          <div>
            <button>
              <EditIcon />
            </button>
          </div>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">Email :</div>
          <div className="flex items-center gap-3 my-2">Mobile :</div>
        </div>

        <div>
          <div className="my-5">
            <h1>Skills :</h1>
          </div>
        </div>

        <div>
          <div className="flex w-full max-w-sm items-center gap-5">
            <label className="text-md font-bold"> Resume</label>
            <button>
              <DownloadIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-lg my-5 font-bold">Applied Jobs</h1>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Profile;
