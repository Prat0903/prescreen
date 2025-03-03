import axios from "../../utils/axios";
import { loadMovieDetail } from "../reducers/movieSlice";
export { removeMovieDetail } from "../reducers/movieSlice";

export const asyncLoadMovieDetail = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);

    let completeDetail = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map(
        (translation) => translation.english_name
      ),
      videos: videos.data.results.find((v) => v.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };

    dispatch(loadMovieDetail(completeDetail));
  } catch (error) {
    console.log("Error:", error);
  }
};
