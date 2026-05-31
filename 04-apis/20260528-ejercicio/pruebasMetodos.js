const API_URL = "https://6a147af06c7db8aac0549ba4.mockapi.io/api/v1/movies";

async function getMovies() {
  try {
    const response = await fetch(API_URL);

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

getMovies();