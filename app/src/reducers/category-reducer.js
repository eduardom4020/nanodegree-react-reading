import { 
    SET_CATEGORIES 
} from '../actions/types';

const initialState = [
    {name: 'Default', path: 'default'}
];

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
};

export default CategoryReducer;