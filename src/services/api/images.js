import axios from "axios";
import { setHeader } from "./index";
import { API_URL } from "../../constants/env";

export default {
  getImages: async () => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/photos`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  getImageById: async id => {
    let config = {
      method: "GET",
      baseURL: `${API_URL}/photos/${id}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  }
};