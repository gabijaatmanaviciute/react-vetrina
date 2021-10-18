import axios from "axios";

export const httpRequest = async (requestConfig) => {
  try {
    const response = await axios({ ...requestConfig });
    // console.log("axios response ", response);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

// UNSPLASH API:
const UNSPLASH_API_KEY = "DmfUYu2V28I90av_meseyUaMnkRmsn_7rBZKlki6qfk";
const unsplashAPIConfig = {
      method: "get",
      url: "https://api.unsplash.com/search/photos",
      params: {
        page: 1,
        per_page: 4,
        query: "smartphone",
        client_id: UNSPLASH_API_KEY,
      },
    }

export const getImages = async () => {
  try {
    const response = await httpRequest(unsplashAPIConfig);
    // console.log("axios response ", response);
    return response.data.results;
  } catch (error) {
    console.error(error.message);
  }
};

// NEWS API:
const NEWS_API_KEY = "5a200fbc39434849a235997066684175";
const newsAPIConfig = {
  method: "get",
  url: "https://newsapi.org/v2/everything",
  params: {
    q: "apple",
    pageSize: 8,
    from: "2021-10-12",
    to: "2021-10-18",
    sortBy: "popularity",
    apiKey: NEWS_API_KEY,
  },
};

export const getNewsArticles = async () => {
  try {
    const response = await httpRequest(newsAPIConfig);
    // console.log("axios response ", response);
    return response.data.articles;
  } catch (error) {
    console.error(error.message);
  }
};

