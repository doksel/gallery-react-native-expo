import axios from "axios";
import { CLIENT_ID } from "../../constants/env";

import images from "./images";

export const CancelToken = axios.CancelToken;

export const setHeader = () => {
  return {
    Accept: "application/json",
    Authorization: `Client-ID ${CLIENT_ID}`
  };
};

export default {
  images
};