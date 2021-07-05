import {
  FETCH_ALL_PRODUCTS_REQUEST,
  FETCH_ALL_PRODUCTS_FAILURE,
  FETCH_ALL_PRODUCTS_SUCCESS,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_FAILURE,
  FETCH_SINGLE_PRODUCT_SUCCESS,
} from "./action-type";
import ProductDataService from "../../services/product-service";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_PRODUCTS_REQUEST });
  try {
    const response = await ProductDataService.getAll();
    dispatch({
      type: FETCH_ALL_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_PRODUCTS_FAILURE,
      error,
    });
  }
};

export const fetchSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: FETCH_SINGLE_PRODUCT_REQUEST });
  try {
    const response = await ProductDataService.getSingle(id);
    dispatch({
      type: FETCH_SINGLE_PRODUCT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: FETCH_SINGLE_PRODUCT_FAILURE, error });
  }
};
