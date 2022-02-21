import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({results}) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname:`/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
  };
  return (
    <div className="container">
      {/* {!movies && <h4>Loading...</h4>} */}
      {results?.map((movie) => (
          <a>
            <div className="movie" key={movie.id}>
              <img onClick={() => onClick(movie.id, movie.original_title)} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              <h4>
                <Link href={{
                    pathname:`/movies/${movie.id}`,
                    query: {
                      title:movie.original_title
                    },
                }}
                as={`/movies/${movie.id}`}
                >
                  <a>{movie.original_title}</a>
                </Link>
              </h4>
            </div>
          </a>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
          .movie {
            cursor: pointer;
          }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() { // async를 한 이유는 await를 사용했기 때문
  const response = await fetch(`http://localhost:3000/api/movies`);
  const { results } = await response.json();
  return {
    props : {results},
  };
}
// serverSideRender의 단점으로는 API가 느리면 이용자에게 아무것도 없는 화면만 보여주다가 한번에 보여주게된다.
