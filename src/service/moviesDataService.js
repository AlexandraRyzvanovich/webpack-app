import http from "../http-common";

class MoviesDataService {
  getAllMovies() {
    return http.get("/movies").then(({ data }) =>
      data.data.map(({ id, poster_path, title, release_date, genres }) => ({
        id,
        poster_path,
        title,
        genres,
        release_date,
      }))
    );
  }

  sortAllByReleaseDateASC() {
    return http
      .get("/movies?sortBy=release_date&sortOrder=asc")
      .then(({ data }) =>
        data.data.map(({ id, poster_path, title, release_date, genres }) => ({
          id,
          poster_path,
          title,
          genres,
          release_date,
        }))
      );
  }

  sortAllByReleaseDateDESC() {
    return http
      .get("/movies?sortBy=release_date&sortOrder=asc")
      .then(({ data }) =>
        data.data.map(({ id, poster_path, title, release_date, genres }) => ({
          id,
          poster_path,
          title,
          genres,
          release_date,
        }))
      );
  }

  sortByField(fieldName) {
    debugger;
    return http
      .get("/movies?sortBy=" + fieldName + "&sortOrder=asc")
      .then(({ data }) =>
        data.data.map(({ id, poster_path, title, release_date, genres }) => ({
          id,
          poster_path,
          title,
          genres,
          release_date,
        }))
      );
  }

  searchByGenre(genre) {
    return http.get("/movies?searchBy=title&filter=" + genre).then(({ data }) =>
      data.data.map(({ id, poster_path, title, release_date, genres }) => ({
        id,
        poster_path,
        title,
        genres,
        release_date,
      }))
    );
  }

  searchByTitle(title) {
    debugger;
    return http
      .get("/movies?search=" + title + "&searchBy=title")
      .then(({ data }) =>
        data.data.map(({ id, poster_path, title, release_date, genres }) => ({
          id,
          poster_path,
          title,
          genres,
          release_date,
        }))
      );
  }

  getMovieById(id) {
    debugger;
    return http.get("/movies/" + id);
  }

  addMovie(movie) {
    debugger;
    return http.post("/movies", movie);
  }

  updateMovie(movie) {
    return http.put("/movies", movie);
  }
  deleteMovie(id) {
    return http.delete("/movies/" + id).then(this.getAllMovies);
  }
}
export default new MoviesDataService();
