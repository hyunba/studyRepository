const API_KEY = "659fccb8edf938abc045369e7c13761a";
const BASE_PATH = "https://api.themoviedb.org/3"; 

export function getMovies(){
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}