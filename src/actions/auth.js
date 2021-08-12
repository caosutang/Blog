import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

// Action creators
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
