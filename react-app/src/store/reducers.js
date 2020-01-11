import { combineReducers } from 'redux';
import { searchReducer } from './find-movie/search-criteria/reducers'
import { sortReducer } from './find-movie/sort-criteria/reducers'
import { filmReducer } from './find-movie/film-list/reducers'
import { filmIdReducer } from './movie/movie-item/reducers';

export default combineReducers({
    search: searchReducer,
    sort: sortReducer,
    films: filmReducer,
    filmId: filmIdReducer
})