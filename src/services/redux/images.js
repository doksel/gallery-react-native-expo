import { createSlice } from "@reduxjs/toolkit";
import api from "../api";
import { serviceErrors } from "../helpers";

const initialState = {
  images: [],
  image: null,
  error: ""
};

const calculatorSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    getImagesListSuccess(state, { payload }) {
      return {
        ...state,
        images: [...payload]
      };
    },
    setError(state, { payload }) {
      return {
        ...state,
        error: payload
      };
    },
    getImageByIdSuccess(state, { payload }) {
      return {
        ...state,
        image: { ...payload }
      };
    },
    clearImage(state) {
      return {
        ...state,
        image: null
      };
    },
    clearErrore(state) {
      return {
        ...state,
        error: ""
      };
    }
  }
});

export const {
  getImagesListSuccess,
  getImageByIdSuccess,
  setError,
  clearImage,
  clearErrore
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const fetchImages = params => async dispatch => {
  try {
    const { data } = await api.images.getImages(params);

    dispatch(getImagesListSuccess(data));
  } catch (errors) {
    const error = serviceErrors(errors);

    dispatch(setError(error));
  }
};

export const fetchImageById = id => async dispatch => {
  try {
    const { data } = await api.images.getImageById(id);

    dispatch(getImageByIdSuccess(data));
  } catch (errors) {
    const error = serviceErrors(errors);

    dispatch(setError(error));
  }
};