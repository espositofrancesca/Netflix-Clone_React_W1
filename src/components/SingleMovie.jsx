import { Col } from "react-bootstrap";


const SingleMovie = ({ data }) => {
 
  return (
    <Col className="mb-2">
      <img
        width="40px"
        className="img-fluid"
        src={data.Poster}
        alt="movie"
        key={data.imdbID}
      />
    </Col>
  );
};

export default SingleMovie;