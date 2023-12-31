import axios from "axios";
import { ADD_TO_CART, REMOVE_ITEM_CART, UPDATE_CART_QUANTITY, CLEAR_CART } from "../constants/cartConstant";

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/v1/eats/item/${id}`);
        console.log("fooditem", data);
        const fooditemsData = data.data;
        const image = fooditemsData.images && fooditemsData.images.length > 0 ? fooditemsData.images[0].url : "";

        dispatch({
            type: ADD_TO_CART,
            payload: {
                fooditem: fooditemsData._id,
                name: fooditemsData.name,
                price: fooditemsData.price,
                image,
                stock: fooditemsData.stock,
                quantity
            }
        });
        localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        alert.error("Failed to add item to cart. pls try again");
    }
}

export const updateCartQuantity = (fooditemId, quantity) => async (dispatch) => {
    dispatch({
        type: UPDATE_CART_QUANTITY,
        payload: { fooditemId },
    });
};

export const removeItemFromCart = (id) => async (dispatch,getState) => {
    dispatch({
        type: REMOVE_ITEM_CART,
        payload: id
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const clearCart = () => (dispatch) => {
    dispatch({
        type: CLEAR_CART,
    });
    localStorage.removeItem("cartItems");
};