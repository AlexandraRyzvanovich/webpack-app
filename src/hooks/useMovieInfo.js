import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const useMovieInfo = (selectedMovie) => {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    setMovie(selectedMovie);
  }, []);

  return movie;
};

export default useMovieInfo;

