import filmService from '../../../api/film-service'

export const CHANGE_SEARCH_CRITERIA = 'CHANGE_SEARCH_CRITERIA';
export const SEARCH_CONFIRMED = 'SEARCH_CONFIRMED';

export const changeSearchCriteria = (criteria) => {
    return {
        type: CHANGE_SEARCH_CRITERIA,
        payload: criteria
    }
}

export const searchConfirmed = (criteria) => (dispatch) => {
    filmService.search(criteria)
        .then(films => films.json())
        .then(films => {
            console.log(films);
            dispatch({
                type: SEARCH_CONFIRMED,
                payload: films
            });
        });
}