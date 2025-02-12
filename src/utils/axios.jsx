import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDUyMmMwMGNmMmM0OWIzMzA5MjlkYTg2ZTg3NTQ4MyIsIm5iZiI6MTczOTM2OTg1Ny44OTc5OTk4LCJzdWIiOiI2N2FjYWQ4MTVjMGU2N2U1NmJiYjVjNjAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.17f3xGbftzIHKwYbej0W7A1K-_xEa2-c1JD8amnbcAo",
  },
});

export default instance;
