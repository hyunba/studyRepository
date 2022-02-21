const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirect() {
    return [
      {
        source: "/contact*", // 사용자가 이쪽으로오면 *을 사용하면 뒤 내용도 다 똑같음
        destination: "/form*", // 이쪽으로 보내진다.
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
    {
      source: "/api/movies", // redirect는 사용자가 source 주소와 destination 주소를 알게된다. 하지만 rewrites는 사용자에게 source 주소만 보여준다.
      destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },
    {
      source: "/api/movies/:id",
      destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
    },
  ]
  }
}
