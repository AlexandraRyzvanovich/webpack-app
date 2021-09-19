class MovieService {
  static getAllMovies = () => {
    let moviesList = [];
    moviesList.push({
      id: 1,
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      id: 2,
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      id: 3,
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      id: 4,
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      id: 5,
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });
    moviesList.push({
      id: 6,
      img: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
    });

    return moviesList;
  };

  static getFullMovieInfo = (id) => {
    debugger;
    return {
      id: id,
      url: "https://www.kino-teatr.ru/movie/posters/big/1/32751.jpg",
      name: "Lion King",
      type: "Cartoon",
      year: 1994,
      rating: 4.5,
      comment: "Cool film to watch",
      length: 100,
      description:
        "The Lion King is a 1994 American animated musical drama film produced by Walt Disney Feature Animation and released by Walt Disney Pictures. It is the 32nd Disney animated feature film, and the fifth animated film produced during a period known as the Disney Renaissance. The Lion King was directed by Roger Allers and Rob Minkoff, produced by Don Hahn, and has a screenplay credited to Irene Mecchi, Jonathan Roberts, and Linda Woolverton. Its original songs were written by composer Elton John and lyricist Tim Rice, with a score by Hans Zimmer. The film features an ensemble voice cast that includes Matthew Broderick, James Earl Jones, Jeremy Irons, Jonathan Taylor Thomas, Moira Kelly, Nathan Lane, Ernie Sabella, Rowan Atkinson, Robert Guillaume, Madge Sinclair (in her last film role), Whoopi Goldberg, Cheech Marin, and Jim Cummings. The story takes place in a kingdom of lions in Africa and was influenced by the Biblical stories of Joseph and Moses, and William Shakespeare's Hamlet.",
    };
  };
}

export default MovieService;
