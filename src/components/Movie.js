import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <tr>
      <td>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <img src={coverImg} alt={title} />
      </td>
      <td>
        <p>{summary}</p>
      </td>
      <td>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
