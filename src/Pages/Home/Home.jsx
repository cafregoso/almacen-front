import React, { Fragment, useEffect, useState } from "react";
import Axios from "axios";
import { Autocomplete, TextField } from "@mui/material";
import { Box } from "@mui/system";

import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const record = {
      "location": null,
      "product": null,
      "bills": null,
      "qtty": null
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios({
          url: "http://127.0.0.1:8001/products/",
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
          url: "http://127.0.0.1:8001/locations/",
        });

        setLocations(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLocations();
  }, [setLocations]);

    const handleProductChange = (e) => {
      const findProduct = (product) => {
        return product.code === e.target.textContent
      }

      record.product = products.find(findProduct).id
    }

    const handleLocationChange = (e) => {
        const findLocation = (location) => {
            return location.location === e.target.textContent
        }

        record.location = locations.find(findLocation).id
}

    const handleOrderChange = (e) => {
        record.bills = e.target.value
    }

    const handleQttyChange = (e) => {
        record.qtty = e.target.value
    }

    const handleCreateRecord = () => {
        Axios.post('http://127.0.0.1:8001/create-register/', {
            location: record.location,
            product: record.product,
            bills: record.bills,
            qtty: record.qtty
          })
          .catch(error => console.log(error))
    }

  return (
    <Fragment>
      <form className="containerHome">
        <div className="homeProduct">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={products}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Producto" />}
            getOptionLabel={(option) => option.code}
            loading={true}
            onChange={ handleProductChange }
            style={{ width: "222px", marginBottom: "10px" }}
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
            loading={true}
            onChange={ handleLocationChange }
            style={{ width: "222px" }}
          />
        </div>
        <div className="homeOrder">
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            Validate
            autoComplete="off"
            onChange={ handleOrderChange }
          >
            <TextField required id="outlined-required" label="Orden de Compra" />
          </Box>
        </div>
        <div className="homeQtty">
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            Validate
            autoComplete="off"
            onChange={ handleQttyChange }
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
        <div>
          {/* <Button
            color="primary"
            variant="contained"
            onClick={ handleCreateRecord }
            component={ Link }
          >
            Guardar
          </Button> */}
          <input 
            type='submit' 
            value='Guardar'
            onClick={ handleCreateRecord }
            style={{ 
              backgroundColor: '#1C76D2',
              color: '#FFF',
              border:'none',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          />
        </div>
      </form>
    </Fragment>
  );
}
