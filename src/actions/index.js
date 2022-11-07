import { createAction } from '@reduxjs/toolkit';

export const fetchHeroes = (request) => (dispatch) => {
	dispatch(heroesFetching());
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
	dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()))
}

export const heroesFetching = createAction('HEROES_FETCHING');
// export const heroesFetching = () => ({
//         type: 'HEROES_FETCHING'
// })

export const heroesFetched = createAction('HEROES_FETCHED');
// export const heroesFetched = (heroes) => ({
//         type: 'HEROES_FETCHED',
//         payload: heroes,
// })

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
// export const heroesFetchingError = () => ({
//         type: 'HEROES_FETCHING_ERROR'
// })

export const heroDeleted = createAction('HERO_DELETED');
// export const heroDeleted = (id) => ({
//         type: 'HERO_DELETED',
//         payload: id,
    
// })

export const heroCreated = createAction('HERO_CREATED');
// export const heroCreated = (hero) => ({
//         type: 'HERO_CREATED',
//         payload: hero,
// })

export const filtersFetching = () => ({
        type: 'FILTERS_FETCHING',
})

export const filtersFetched = (filters) => ({
        type: 'FILTERS_FETCHED',
        payload: filters,
})

export const filtersFetchingError = () => ({
        type: 'FILTERS_FETCHING_ERROR',
})

export const activeFilterChanged = (filter) => ({
	type: 'ACTIVE_FILTER_CHANGED',
	payload: filter,
})

// export const activeFilterChanged = (filter) => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch({
// 			type: 'ACTIVE_FILTER_CHANGED',
// 			payload: filter, 
// 		})
// 	}, 1000)
// }