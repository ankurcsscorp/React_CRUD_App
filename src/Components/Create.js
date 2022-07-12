import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import array from "./array";
import { v4 as uuid } from "uuid";
import { BoxSpacing, BoxContainer } from "../StyledComponent/Styled";
const Create = () => {
  const [name, setname] = useState();
  const [designation, setDesignation] = useState();
  const [mobile, setMobile] = useState();
  const [isDisables, setIsDisable] = useState(true);
  let history = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let unicqueId = ids.slice(0, 5);
    array.push({
      id: unicqueId,
      name: name,
      designation: designation,
      mobile: mobile,
    });
    history("/");
  };
  useEffect(() => {
    if (name && designation && mobile) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [name, designation, mobile]);

  useEffect(() => {
    console.log(array);
  });

  return (
    <BoxContainer>
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          fullWidth
          label="Name"
          onChange={(e) => setname(e.target.value)}
        />
        <BoxSpacing />
        <TextField
          fullWidth
          label="Designation"
          onChange={(e) => setDesignation(e.target.value)}
        />
        <BoxSpacing />
        <TextField
          fullWidth
          label="Mobile"
          onChange={(e) => setMobile(e.target.value)}
        />
        <BoxSpacing />

        <Button
          variant="contained"
          fullWidth
          disabled={isDisables}
          onClick={(e) => handelSubmit(e)}
        >
          Create
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

export default Create;
