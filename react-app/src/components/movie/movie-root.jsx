import React, { Component } from 'react';
import { MovieItem } from './movie-item';
import MovieList from '../find-movie/movie-list';
import { searchMovieById } from '../../store/movie/movie-item/action'
import { connect } from 'react-redux';
import { ErrorBoundary } from '../error/error-boundary';

export class MovieRoot extends Component {
    componentDidMount() {
        this.props.searchMovieById(this.props.match.params.id);
    }

    render() {
        const { searchMovieById, film, films = [] } = this.props;

        return this.props.film ? (
            <div>
                <header>
                    <div id="netflixLabel"><b>netflix</b>roulette</div>
                    <div className="search-icon" onClick={() => this.props.history.push('/')}></div>
                </header>
                <ErrorBoundary>
                    <MovieItem film={film} />
                </ErrorBoundary>

                <div className="sort-container">Films by {film.genres[0]} genre</div>
                {films.length !== 0 && <MovieList films={films} searchMovie={searchMovieById} />}
            </div>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return {
        film: state.filmId.film,
        films: state.filmId.films
    };
};

const mapDispatchToProps = {
    searchMovieById
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieRoot);
