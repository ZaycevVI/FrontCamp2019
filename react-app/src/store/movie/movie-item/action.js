import filmService from '../../../api/film-service'

export const SEARCH_MOVIE_BY_ID = 'SEARCH_MOVIE_BY_ID';
export const SEARCH_MOVIES_BY_GENRE = 'SEARCH_MOVIES_BY_GENRE';

export const searchMovieById = (id) => (dispatch) => {
    return filmService.searchById(id)
        .then(film => film.json())
        .then(film => {
            dispatch({
                type: SEARCH_MOVIE_BY_ID,
                payload: film
            });
            return film.genres[0];
        })
        .then(genre => filmService.search({ search: 'genre', value: genre, sort: '' }))
        .then(films => films.json())
        .then(films => {
            dispatch({
                type: SEARCH_MOVIES_BY_GENRE,
                payload: films.data
            })
        });
}
