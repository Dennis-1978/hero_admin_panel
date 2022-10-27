export const heroesFetching = () => ({
        type: 'HEROES_FETCHING'
})

export const heroesFetched = (heroes) => ({
        type: 'HEROES_FETCHED',
        payload: heroes
})

export const heroesFetchingError = () => ({
        type: 'HEROES_FETCHING_ERROR'
})

export const heroDeleted = (id) => ({
        type: 'HERO_DELETED',
        payload: id,
    
})