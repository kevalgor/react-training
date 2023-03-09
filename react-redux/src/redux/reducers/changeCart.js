const initialCartState = 10;

const changeCart = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return (state += 1);
    case "REMOVEFROMCART":
      return (state -= 1);
    default:
      return initialCartState;
  }
};

export default changeCart;
