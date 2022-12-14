import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useAuth } from "../../contexts/AuthContextProvider";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { Paper } from "@mui/material";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const { addProductToCart } = useCart();
  const { user } = useAuth();

  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300, m: 3 }}>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          margin: "0 auto",
        }}
        className="paper"
      >
        <MDBCarousel interval={3000} showIndicators dark fade>
          <MDBCarouselInner>
            <MDBCarouselItem className="active">
              <MDBCarouselElement
                src={item.image}
                alt="..."
                className="carousel-image"
              />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                src={item.image2}
                alt="..."
                className="carousel-image"
              />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src={item.image3}
                alt="..."
                className="carousel-image"
              />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </Paper>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          $ {item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <>
          <Button size="small" onClick={() => deleteProduct(item.id)}>
            DELETE
          </Button>
          <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
            EDIT
          </Button>
        </>

        <Button size="small" onClick={() => addProductToCart(item)}>
          Cart
        </Button>

        <Button size="small" onClick={() => navigate(`/products/${item.id}`)}>
          MORE
        </Button>
      </CardActions>
    </Card>
  );
}
