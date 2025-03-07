import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncLoadPersonDetail,
  removePersonDetail,
} from "../store/actions/peopleActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

const Peopledetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const dispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    dispatch(asyncLoadPersonDetail(id));
    return () => {
      dispatch(removePersonDetail());
    };
  }, [id]);

  return info ? (
    <div className="w-full px-[5%] bg-[#1F1E24] h-[140vh]">
      {/* Navigation */}
      <nav className="w-full h-[6vh] text-zinc-300 flex items-center gap-6 text-xl mt-1 ml-2">
        <Link
          to="/"
          className="ri-home-2-line hover:text-[#6556CD] text-xl"
        ></Link>
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line text-xl"
        ></Link>
      </nav>

      <div className="w-full flex mt-2">
        {/* Poster & Socail Links*/}
        <div className="w-[15%]">
          <img
            className="shadow-xl w-full h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path})`}
            alt=""
          />
          <hr className="border-gray-400 mt-3 mb-3 h-[2px]" />

          <div className="flex items-center gap-x-7">
            <a
              href={`https://www.facebook.com/${info.externalId.facebook_id}`}
              target="_blank"
            >
              <i className="ri-facebook-line text-3xl text-zinc-500 hover:text-[#0866FF]"></i>
            </a>
            <a
              href={`https://www.instagram.com/${info.externalId.instagram_id}`}
              target="_blank"
            >
              <i className="ri-instagram-line text-3xl text-zinc-500 hover:text-[#E70194]"></i>
            </a>
            <a
              href={`https://x.com/${info.externalId.twitter_id}`}
              target="_blank"
            >
              <i className="ri-twitter-x-line text-3xl text-zinc-500 hover:text-[#E7E9EA]"></i>
            </a>
            <a
              href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
              target="_blank"
            >
              <i className="ri-earth-fill text-3xl text-zinc-500 hover:text-[#990000]"></i>
            </a>
          </div>

          {/* Info*/}
          <h1 className="text-xl text-zinc-300 my-4 ml-2 font-semibold w-full">
            Personal Info
          </h1>

          <h1 className="detail text-lg font-medium text-zinc-400 ml-2 ">
            Known For
          </h1>
          <h1 className="font-medium text-zinc-300 ml-2">
            {info.detail.known_for_department}
          </h1>

          <h1 className="detail text-lg font-medium text-zinc-400 mt-2.5 ml-2">
            Gender
          </h1>
          <h1 className="font-medium text-zinc-300 ml-2">
            {info.detail.gender === 1 ? "Female" : "Male"}
          </h1>

          <h1 className="detail text-lg font-medium text-zinc-400 mt-2.5 ml-2">
            Birhtday
          </h1>
          <h1 className="font-medium text-zinc-300 ml-2">
            {info.detail.birthday}
          </h1>

          <h1 className="detail text-lg font-medium text-zinc-400 mt-2.5 ml-2">
            Place Of Birth
          </h1>
          <h1 className="font-medium text-zinc-300 ml-2">
            {info.detail.place_of_birth}
          </h1>

          <h1 className="detail text-lg font-medium text-zinc-400 mt-2.5 ml-2">
            Also Known As
          </h1>
          <h1 className="font-medium text-zinc-300 ml-2">
            {info.detail.also_known_as.join(", ")}
          </h1>
        </div>

        {/* Details*/}
        <div className="w-[85%] ml-[3%]">
          <h1 className="person text-5xl text-zinc-300 font-black ml-1">
            {info.detail.name}
          </h1>

          <h1 className="detail text-xl font-medium text-[#ffa640] mt-4 ml-3">
            Biography
          </h1>
          <p className="text-zinc-400 mt-2 ml-3">{info.detail.biography}</p>

          <h1 className="detail text-xl font-medium text-[#ffa640] mt-4 mb-3 ml-3">
            Worked In
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Peopledetails;
