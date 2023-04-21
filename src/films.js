// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((film) => film.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const filmDirector = array.filter((film) => film.director === director);
  return filmDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const filmDirector = array.filter((film) => film.director === director);
  const averageDirector = filmDirector.reduce(
    (prev, current) => prev + current.score / filmDirector.length,
    0
  );
  return averageDirector;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const orderAZarray = array
    .map((film) => film.title)
    .sort()
    .slice(0, 20);
  return orderAZarray;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const filmsByYear = array
    .map((films) => films)
    .sort(function (a, b) {
      if (a.title) return -1;
      if (b.title) return 1;
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      return 0;
    });
  return filmsByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const filmCategory = array.filter(
    (film) => film.genre == genre && film.score > 0
  );
  const filmAverageCategory = filmCategory.reduce(
    (prev, current) => prev + current.score / filmCategory.length,
    0
  );
  return filmAverageCategory;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const toMinutes = function (array) {
    return !array[1]
      ? Number(array[0]) * 60
      : Number(array[0]) * 60 + Number(array[1]);
  };
  const hrsToMins = array.map(function (film) {
    return {
      title: film.title,
      year: film.year,
      director: film.director,
      duration: parseFloat(toMinutes(film.duration.match(/\d+/g))),
      genre: film.genre,
      score: film.score
    };
  });
  return hrsToMins;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const bestFilm = array
    .filter((film) => film.year === year)
    .reduce((prev, current) => (prev.score > current.score ? prev : current));
  return [bestFilm];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
