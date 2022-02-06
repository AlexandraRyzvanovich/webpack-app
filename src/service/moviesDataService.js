import http from "../http-common";

class MoviesDataService {
  getAllMovies() {
    return http.get("/movies");
  }

  sortAllByReleaseDateASC() {
    return http.get("/movies?sortBy=release_date&sortOrder=asc");
  }

  sortAllByReleaseDateDESC() {
    return http.get("/movies?sortBy=release_date&sortOrder=desc");
  }

  sortByField(fieldName) {
    return http.get(`/movies?sortBy=${fieldName}&sortOrder=asc`);
  }

  searchByGenre(genre) {
    return http.get(`/movies?searchBy=title&filter=${genre}`);
  }

  searchByTitle(title) {
    return http.get(`/movies?search=${title}&searchBy=title`);
  }

  getMovieById(id) {
    return http.get(`/movies/ ${id}`);
  }

  addMovie(movie) {
    return http.post("/movies", movie);
  }

  updateMovie(movie) {
    return http.put("/movies", movie);
  }
  deleteMovie(id) {
    return http.delete(`/movies/ ${id}`);
  }
}
export default new MoviesDataService();
