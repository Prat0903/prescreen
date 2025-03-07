import axios from "../../utils/axios";
import { loadTvDetail } from "../reducers/tvSlice";
export { removeTvDetail } from "../reducers/tvSlice";

export const asyncLoadTvDetail = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalId = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchProviders = await axios.get(`/tv/${id}/watch/providers`);

    let completeDetail = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map(
        (translation) => translation.english_name
      ),
      videos: videos.data.results.find((s) => s.type === "Trailer"),
      watchProviders: watchProviders.data.results.IN,
    };

    dispatch(loadTvDetail(completeDetail));
  } catch (error) {
    console.log("Error:", error);
  }
};
