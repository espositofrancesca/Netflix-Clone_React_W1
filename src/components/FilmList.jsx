import { Component } from "react";

class FilmList extends Component {
  render() {
    return (
      <div className="mt-5">
        <h3 className="mb-2"> {this.props.titolo}</h3>

        {this.props.film.map((film) => (
          <img
            src={film.Poster}
            alt="poster_film"
            className=" box-image"
            key={film.imdbID}
          />
        ))}
      </div>
    );
  }
}

export default FilmList;
