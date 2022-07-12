import React, { useEffect, useState } from "react";
import array from "./array";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { BoxSpacing, BoxContainer } from "../StyledComponent/Styled";

const Edit = () => {
  const [name, setname] = useState("");
  const [designation, setDesignation] = useState("");
  const [mobile, setMobile] = useState("");
  const [ids, setid] = useState("");

  let history = useNavigate();
  var ii = array.map((v) => v.id);
  var index = ii.indexOf(String(ids));
  const handelSubmit = (e) => {
    e.preventDefault();

    let updateArray = array[index];
    updateArray.name = name;
    updateArray.designation = designation;
    updateArray.mobile = mobile;

    history("/");
  };

  useEffect(() => {
    setname(localStorage.getItem("name"));
    setDesignation(localStorage.getItem("designation"));
    setMobile(localStorage.getItem("mobile"));
    setid(localStorage.getItem("id"));
  }, []);

  return (
    <BoxContainer>
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <BoxSpacing />
        <TextField
          fullWidth
          label="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <BoxSpacing />
        <TextField
          fullWidth
          label="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <BoxSpacing />

        <Button
          variant="contained"
          fullWidth
          disabled={false}
          onClick={(e) => handelSubmit(e)}
        >
          Update
        </Button>
        <BoxSpacing />
        <Link to="/">
          <Button variant="contained" fullWidth>
            Go to Index Page
          </Button>
        </Link>
      </FormControl>
    </BoxContainer>
  );
};

export default Edit;
