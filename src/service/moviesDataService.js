import http from "../http-common";

class MoviesDataService {
  getAllMovies() {
    return http.get("/movies").then(({ data }) => data.data.map(({ id, poster_path, title, release_date, genres }) => ({
      id,
      img: poster_path,
      name: title,
      type: genres[0],
      year: release_date,
    })));
  }
}
export default new MoviesDataService();
