// script.js

const movies = [
    {
        title: "Inception",
        rating: "8.8",
        description: "Un voleur qui vole les secrets à travers les rêves.",
        image: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg"
    },
    {
        title: "Interstellar",
        rating: "8.6",
        description: "Des explorateurs voyagent à travers l'espace pour sauver l'humanité.",
        image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
    },
    {
        title: "The Dark Knight",
        rating: "9.0",
        description: "Batman affronte le Joker à Gotham City.",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    }
];

const moviesContainer = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');

function displayMovies(moviesList) {
    moviesContainer.innerHTML = '';
    moviesList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="info">
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.rating}</p>
                <p>${movie.description}</p>
            </div>
        `;
        moviesContainer.appendChild(movieCard);
    });
}

// Filtre de recherche
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
});

displayMovies(movies);
