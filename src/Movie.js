import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";


function Moive({ year, title, summary, poster}){
    return (
    <div class="movies__movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summery">{summary}</p>
        </div>
    </div>
    );
}

Moive.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Moive;