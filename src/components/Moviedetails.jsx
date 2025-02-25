import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncLoadMovieDetail } from "../store/actions/movieActions";
import { useParams } from "react-router-dom";

const Moviedetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(asyncLoadMovieDetail(id));
  }, []);

  return <div>Moviedetails</div>;
};

export default Moviedetails;
