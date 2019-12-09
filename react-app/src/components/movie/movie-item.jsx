import React, { Component } from 'react';

export class MovieItem extends Component {
    render() {
        const { film } = this.props;

        return (
            <div className="movie-detailed">
                <img src={film.poster_path} alt="no img"></img>
                <div className="info">
                    <div>
                        <div className="title">{film.title}</div>
                        <div className="rating">{film.vote_average}</div>
                    </div>
                    <div>
                        <div className="date">{film.release_date}</div>
                        <div className="budget">{film.budget}<b>$</b></div>
                    </div>
                    <div>
                        {film.overview}
                    </div>
                </div>
            </div>
        );
    }
}