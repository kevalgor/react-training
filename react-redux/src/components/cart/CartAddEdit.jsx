import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { addCart, removeCart } from "../../redux/actions";

const H1 = styled("Typography")({
  padding: "10px 0px",
});

const H3 = styled("Typography")({
  padding: "10px 15px",
});

const CartAddEdit = () => {
  const cartState = useSelector((state) => {
    return state.changeCart;
  });
  const dispatch = useDispatch();
  return (
    <div style={{ margin: "80px 15px" }}>
      <H1 variant="h1" component={"h1"}>
        Cart details
      </H1>
      <Button
        style={{ margin: "0 15px" }}
        variant="contained"
        color="success"
        onClick={() => dispatch(addCart())}
      >
        Add to cart
      </Button>
      <H3 variant="h3" component={"h3"}>
        {cartState}
      </H3>
      <Button
        style={{ margin: "0 15px" }}
        variant="contained"
        color="error"
        onClick={() => dispatch(removeCart())}
      >
        Remove from cart
      </Button>
    </div>
  );
};

export default CartAddEdit;
