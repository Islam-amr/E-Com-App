export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const DEC_QTY = "DEC_QTY";
export const INC_QTY = "INC_QTY";

export const addToCart = (id, name, quantity, price, img) => {
  return { type: ADD_TO_CART, payload: { id, name, quantity, price, img } };
};

export const removeFromCart = (id) => {
  return { type: REMOVE_FROM_CART, payload: id };
};

export const increaseQty = (id, name, quantity, price, img) => {
  return { type: INC_QTY, payload: { id, name, quantity, price, img } };
};

export const decreaseQty = (id, name, quantity, price, img) => {
  return { type: DEC_QTY, payload: { id, name, quantity, price, img } };
};
