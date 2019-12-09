import { SEARCH_MOVIE_BY_ID, SEARCH_MOVIES_BY_GENRE } from "./action";

// const getCriteria = (id = "title") => {
//     const criteria = [
//         { id: "title", text: "Title", active: false },
//         { id: "genres", text: "Genre", active: false }
//     ];

//     criteria.find(item => item.id === id).active = true;

//     return criteria;
// };



export const filmIdReducer = (state = {}, action) => {
    switch (action.type) {
        case SEARCH_MOVIE_BY_ID:
            return {
                ...state,
                film: action.payload
            }
        case SEARCH_MOVIES_BY_GENRE:
            return {
                ...state,
                films: action.payload
            }
        default:
            return state;
    }
}