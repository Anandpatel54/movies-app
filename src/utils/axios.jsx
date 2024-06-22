import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmU5OGZkZDcxMDc1N2JiZjczYjM3OWFlYTY4YzJjYiIsInN1YiI6IjY2NzQxNWQzNjVhNDFkMjEyMGRlMjViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FlUMUeNZYX7FqoSiFL-dW3hOHJBawkibD1pD6vNtIcA",
  },
});

export default instance;
