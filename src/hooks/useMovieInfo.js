import { useEffect, useState } from "react";
import MovieService from "../service/movieService";
const useMovieInfo = (id) => {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    setMovie(MovieService.getFullMovieInfo(id));
  }, []);

  return movie;
};

export default useMovieInfo;
