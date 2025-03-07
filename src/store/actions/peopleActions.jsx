import axios from "../../utils/axios";
import { loadPersonDetail } from "../reducers/peopleSlice";
export { removePersonDetail } from "../reducers/peopleSlice";

export const asyncLoadPersonDetail = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalId = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);

    let completeDetail = {
      detail: detail.data,
      externalId: externalId.data,
      combinedCredits: combinedCredits.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data,
    };

    dispatch(loadPersonDetail(completeDetail));
  } catch (error) {
    console.log("Error:", error);
  }
};
