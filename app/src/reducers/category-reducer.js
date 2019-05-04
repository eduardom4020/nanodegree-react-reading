import { 
    SET_CATEGORIES,
    ORDER_POSTS 
} from '../actions/types';

const initialState = [
    {name: 'Default', path: 'default', orderBy: null}
];

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.categories;
        case ORDER_POSTS:
            const { orderBy, categoriesPaths } = action;
            return state.map(category => ({
                ...category, 
                orderBy: categoriesPaths.indexOf(category.path) >= 0 ?
                    orderBy
                :
                    category.orderBy
            }));
        default:
            return state;
    }
};

export default CategoryReducer;