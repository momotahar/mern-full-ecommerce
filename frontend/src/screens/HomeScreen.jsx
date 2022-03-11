import { useEffect, useReducer } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import logger from "use-reducer-logger";
import Product from "../components/Product";
//Create reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const HomeScreen = () => {

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className='products'>
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Row>
            {products?.map((product) => (
              <Col  key={product.slug} sm={6} md={4} lg={3} className='mb-3'>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
