import filmService from '../../../api/film-service'

export const SEARCH_MOVIE_BY_ID = 'SEARCH_MOVIE_BY_ID';
export const MOVIES_NOT_FOUND = 'MOVIES_NOT_FOUND';

export const searchMovieById = (id) => (dispatch) => {
    let film;

    return filmService.searchById(id)
        .then(f => f.json())
        .then(f => {
            film = f;
            return filmService.search({ search: 'genres', value: film.genres[0], sort: '' });
        })
        .then(films => films.json())
        .then(films => {
            dispatch({
                type: SEARCH_MOVIE_BY_ID,
                payload:  {
                    films: films.data,
                    film: film 
                }
            })
        });
}
