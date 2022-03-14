import { Box, TextField } from "@mui/material";
import Axios from "axios";
import React, { Fragment } from "react";

export default function CreateLocation() {
  const location = {
    location: null,
  };

  const handleClick = (e) => {
    Axios.post("http://127.0.0.1:8001/create-location/", {
      location: location.location,
    }).catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    location.location = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <Fragment>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          margin: "30px auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            Validate
            autoComplete="off"
            onChange={handleChange}
          >
            <TextField required id="outlined-required" label="Ubicacion" />
          </Box>
          <div 
            style={{
                width: '100%',
                maxWidth: '280px',
                display: 'grid',
                placeItems: 'center',
                margin: '20px auto'
            }}
          >
            <input
                type="submit"
                value="Guardar"
                onClick={handleClick}
                style={{
                backgroundColor: "#1C76D2",
                color: "#FFF",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "1rem",
                cursor: "pointer",
                }}
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
}
