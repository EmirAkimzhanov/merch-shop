import { Box, Button, createTheme, TextField, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#252734",
    },
    secondary: {
      main: "#3C3F52",
    },
  },
});

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    image2: "",
    image3: "",
    category: "",
    astana: "",
    almaty: "",
    nursultan: "",
    szymkent: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else if (e.target.name === "Astana") {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);

      console.log(e.target.value);
    }
  };

  return (
    <Box id="box" sx={{ width: "50vw", margin: "10vh auto" }}>
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Title"
        variant="standard"
        fullWidth
        name="title"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Description"
        variant="standard"
        fullWidth
        name="description"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Price"
        type="number"
        variant="standard"
        fullWidth
        name="price"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Image"
        variant="standard"
        fullWidth
        name="image"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Image2"
        variant="standard"
        fullWidth
        name="image2"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Image3"
        variant="standard"
        fullWidth
        name="image3"
        onChange={handleInp}
      />

      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Category"
        variant="standard"
        fullWidth
        name="category"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Astana price"
        variant="standard"
        fullWidth
        name="astana"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Astana price"
        variant="standard"
        fullWidth
        name="almaty"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Astana price"
        variant="standard"
        fullWidth
        name="nursultan"
        onChange={handleInp}
      />
      <TextField
        sx={{ my: 2 }}
        id="standard-basic"
        label="Astana price"
        variant="standard"
        fullWidth
        name="szymkent"
        onChange={handleInp}
      />
      <Button
        sx={{ my: 2 }}
        theme={theme}
        variant="outlined"
        fullWidth
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
      >
        Add product
      </Button>
    </Box>
  );
};

export default AddProduct;
