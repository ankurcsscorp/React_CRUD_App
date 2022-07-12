import * as React from "react";
import array from "./array";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link, useNavigate } from "react-router-dom";
import { BoxContainer, BoxSpacing } from "../StyledComponent/Styled";
import { Button } from "@mui/material";

const CrudIndex = () => {
  let history = useNavigate();

  const HandleDelete = (id) => {
    var index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);
    array.splice(index, 1);
    history("/");
  };

  function setID(id, name, designation, mobile) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("designation", designation);
    localStorage.setItem("mobile", mobile);
  }
  return (
    <BoxContainer>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                NAME
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                DESIGNATION
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                MOBILE
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Delete
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {array.map((array) => (
              <TableRow
                key={array.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {array.id}
                </TableCell>
                <TableCell align="center">{array.name}</TableCell>
                <TableCell align="center">{array.designation}</TableCell>
                <TableCell align="center">{array.mobile}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={(e) => HandleDelete(array.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Link to={`/edit`}>
                    <Button
                      onClick={(e) =>
                        setID(
                          array.id,
                          array.name,
                          array.designation,
                          array.mobile,
                        )
                      }
                      variant="info"
                    >
                      Update
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <hr />
          <BoxSpacing>
            <Link to="/Create">
              <Button variant="contained">CREATE</Button>
            </Link>
          </BoxSpacing>
        </Table>
      </TableContainer>
    </BoxContainer>
  );
};

export default CrudIndex;
