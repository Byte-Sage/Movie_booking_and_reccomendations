function showMovieDetails(movieId) {
  const modal = document.getElementById('modal');
  const movieTitle = document.getElementById('movie-title');
  const movieRating = document.getElementById('movie-rating');
  const movieReview = document.getElementById('movie-review');

  // Get movie details based on the movieId
  const movie = getMovieDetails(movieId);

  // Set the movie details in the modal
  movieTitle.innerText = movie.title;
  movieRating.innerText = 'Rating: ' + movie.rating;
  movieReview.innerText = movie.review;

  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

function getMovieDetails(movieId) {
  // Replace this with your own movie data
  const movies = [
    {
      id: 1,
      title: 'JOHNWICK',
      rating: 8.5,
      review:
        'John wick 2014 such a superb movie now a days very rare film comes like this which . Such a beautiful writing of the writer and directors awesome direction such intense scene  and painful life of a man who came out from some wrong work and leading a peace ful life ,which really touch audience heart',
    },
    {
      id: 2,
      title: 'Spider-Man',
      rating: 7.8,
      review: 'Its honestly absurd how good the "Spider-Verse" movies are. "Across the Spider-Verse" is just as great, if not better than "Into the Spider-Verse". I really dont know how. "Spider-Man: Across the Spider-Verse" is fantastic! Deftly juggles deeply heartfelt character beats with crazy multiverse content, just packed with so many delightful easter eggs.',
    },
    {
      id: 3,
      title: 'Avatar',
      rating: 9.0,
      review: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Navi race to protect their home',
    },
    {
      id: 4,
      title: 'Joker',
      rating: 7.2,
      review: 'The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gothams clown prince and leader of the revolution.',
    },
    {
      id: 5,
      title: 'Black-Panther',
      rating: 8.9,
      review: 'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his countrys past.',
    },
    {
      id: 6,
      title: 'Interstellar',
      rating: 6.5,
      review: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    },
    // Add more movie details here
  ];

  // Find the movie based on the movieId
  return movies.find((movie) => movie.id === movieId);
}
