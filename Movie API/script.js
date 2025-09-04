
async function searchMovies() {
      const query = document.getElementById("search").value.trim();
      if (!query) return alert("Please enter a movie name!");

      const res = await fetch(
        `https://www.omdbapi.com/?apikey=thewdb&s=${query}`
      );
      const data = await res.json();

      const moviesDiv = document.getElementById("movies");
      moviesDiv.innerHTML = "";

      if (data.Search) {
        data.Search.forEach((movie) => {
          moviesDiv.innerHTML += `
            <div class="movie-card">
              <img src="${
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }" alt="Poster">
              <h3>${movie.Title}</h3>
              <p>${movie.Year}</p>
            </div>
          `;
        });
      } else {
        moviesDiv.innerHTML = "<p>No movies found.</p>";
      }
    }