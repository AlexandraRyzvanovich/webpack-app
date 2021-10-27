import http from "../http-common";

class MoviesDataService {
  getAllMovies() {
    debugger;
    return http.get("/movies");
  }
}
export default new MoviesDataService();
