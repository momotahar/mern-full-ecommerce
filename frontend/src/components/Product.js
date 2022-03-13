import axios from "axios";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../Store";
import Rating from "./Rating";
const Product = (props) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const { product } = props;

  const addToCartHandler = async (item) => {
    //check if the product is already in the cart or not
    const existItem = cartItems.find((item) => item._id === product._id);
    //Increment the quantity of the exist item in the cart
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Product is out fo stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  return (
    <Card key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className='card-img-top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>Out Of Stock</Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to card</Button>
        )}
      </Card.Body>
    </Card>
  );
};
export default Product;
