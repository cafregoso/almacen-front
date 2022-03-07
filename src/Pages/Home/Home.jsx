import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";

import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [record, setRecord] = useState({
      "location": null,
      "product": null,
      "bills": null,
      "qtty": null
  })

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios({
          url: "http://127.0.0.1:8000/products/",
        });

        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [setProducts]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await Axios({
          url: "http://127.0.0.1:8000/locations/",
        });

        setLocations(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocations();
  }, [setLocations]);

    const handleProductChange = (e) => {
        // setRecord.product = e.target.value
        console.log(e.target)
    }

    const handleLocationChange = (e) => {
        setRecord.location = e.target.value
    }

    const handleOrderChange = (e) => {
        setRecord.bills = e.target.value
    }

    const handleQttyChange = (e) => {
        setRecord.qtty = e.target.value
    }

  return (
    <div className="containerHome">
      <div className="homeProduct">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={products}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Producto" />}
          getOptionLabel={(option) => option.name}
          onChange={ handleProductChange }
        />
      </div>
      <div className="homeLocation">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={locations}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Ubicacion" />}
          getOptionLabel={(option) => option.location}
        />
      </div>
      <div className="homeOrder">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          Validate
          autoComplete="off"
        >
          <TextField required id="outlined-required" label="Orden de Compra" />
        </Box>
      </div>
      <div className="homeQtty">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          Validate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-number"
            label="Cantidad"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </div>
    </div>
  );
}
