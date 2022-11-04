const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETED':
            const newHeroList = state.heroes.filter((hero) => hero.id !== action.payload);
            return {
                ...state,
                heroes: newHeroList,
            }
        case 'HERO_CREATED':
            let newCreatedHeroList = [...state.heroes, action.payload];
            return { 
                ...state, 
                heroes: newCreatedHeroList,
            }
        default: 
            return state;
    }
}

export default heroes;