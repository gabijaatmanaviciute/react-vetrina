import axios from "axios";

// export const httpRequest = async (method, url, data) => {
//     return await
// }

export const getNewsArticlesAPI = async (url, apiKey) => {
  try {
    const response = await axios.get(`${url}${apiKey}`);
    // console.log("axios response ", response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
