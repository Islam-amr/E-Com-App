import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DEC_QTY,
  INC_QTY,
} from "../Action/Cart";

import CartItem from "../../Models/CartItem";

const initalState = {
  items: {},
  totalAmount: 0,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.payload;
      let updateOrNewProduct;
      if (state.items[addedProduct.id]) {
        updateOrNewProduct = new CartItem(
          addedProduct.name,
          state.items[addedProduct.id].quantity + addedProduct.quantity,
          parseInt(addedProduct.price),
          state.items[addedProduct.id].sum +
            parseInt(addedProduct.price) * addedProduct.quantity,
          addedProduct.img
        );
      } else {
        updateOrNewProduct = new CartItem(
          addedProduct.name,
          addedProduct.quantity,
          parseInt(addedProduct.price),
          parseInt(addedProduct.price) * addedProduct.quantity,
          addedProduct.img
        );
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updateOrNewProduct },
        totalAmount:
          state.totalAmount +
          parseInt(addedProduct.price) * addedProduct.quantity,
      };
    case REMOVE_FROM_CART:
      const itemId = action.payload;
      const updatedCartItems = { ...state.items };
      delete updatedCartItems[itemId];
      return {
        ...state,
        items: updatedCartItems,
        totalAmount:
          state.totalAmount -
          parseInt(state.items[itemId].price * state.items[itemId].quantity),
      };

    case INC_QTY:
      const selectedItem = action.payload;
      let updateProduct = new CartItem(
        selectedItem.name,
        state.items[selectedItem.id].quantity + 1,
        parseInt(selectedItem.price),
        state.items[selectedItem.id].sum + parseInt(selectedItem.price),
        selectedItem.img
      );
      return {
        ...state,
        items: { ...state.items, [selectedItem.id]: updateProduct },
        totalAmount: state.totalAmount + parseInt(selectedItem.price),
      };

    case DEC_QTY:
      const selected = action.payload;
      let decProduct = new CartItem(
        selected.name,
        state.items[selected.id].quantity - 1,
        parseInt(selected.price),
        state.items[selected.id].sum - parseInt(selected.price),
        selected.img
      );
      if (state.items[selected.id].quantity === 1) {
        return state;
      } else {
        return {
          ...state,
          items: { ...state.items, [selected.id]: decProduct },
          totalAmount: state.totalAmount - parseInt(selected.price),
        };
      }
  }
  return state;
};
