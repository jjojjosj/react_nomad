import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <h2>{movie.description_intro}</h2>
          <p>
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
export default Detail;
