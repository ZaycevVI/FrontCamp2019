export const CHANGE_SORT_CRITERIA = 'CHANGE_SORT_CRITERIA';

export const changeSortCriteria = (criteria) => {
    return {
        type: CHANGE_SORT_CRITERIA,
        payload: criteria
    }
}