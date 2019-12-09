import React, { Component } from 'react';
import { withRouter } from "react-router";

class MovieList extends Component {
    searchFilm(e) {
        const id = e.target.id;
        const push = this.props.history.push;

        this.props.searchMovie(id)
            .then(() => push(`/film/${id}`));
    }

    render() {
        const { films } = this.props;

        return (
            <div className="movie-container" >
                {films.length === 0 && <h3>No Films Found</h3>}
                {films.length !== 0 && films.map((item, i) => {
                    const genres = item.genres || [];
                    return (
                        <div key={item.id} className="movie-item">
                            <img key={item.id} id={item.id} src={item.poster_path} onClick={this.searchFilm.bind(this)} alt="No img provided"></img>
                            <div className="movie-item__info">
                                <div className="movie-item-text">
                                    <h5 className="movie-item__title">{item.title}</h5>
                                    <div className="movie-item__genres">{genres.join(' & ')}</div>
                                </div>
                                <div className="movie-item__release">{item.release_date}</div>
                            </div>
                        </div>);
                }
                )}
            </div>
        );
    }
}

export default withRouter(MovieList);
