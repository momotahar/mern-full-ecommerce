import React, { useState, useContext } from "react";
import { useEffect } from "react";

import { Button, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { Store } from "../Store";

const ShippingAddressScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
      userInfo,
    cart: { shippingAddress },
  } = state;
  const [fullname, setFullname] = useState(shippingAddress?.fullname || "");
  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullname, address, city, postalCode, country },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({ fullname, address, city, postalCode, country })
      );
      navigate('/payment')
    };
    useEffect(() => {
        if (!userInfo) {
            navigate('/signin?redirect=shipping')
        }
    },[navigate, userInfo])
  return (
    <div>
      <Helmet>
        <title>Shipping Address</title>
          </Helmet>
          <CheckoutSteps step1 step2></CheckoutSteps>
      <div className='container small-container'>
        <h1 className='my-3'>Shipping Address</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='fullName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='fullName'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='fullName'>
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='fullName'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='fullName'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>
          <div className='mb-3'>
            <Button variant='primary' type='submit'>
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ShippingAddressScreen;
