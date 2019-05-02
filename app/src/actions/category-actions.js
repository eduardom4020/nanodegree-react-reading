import { 
    SET_CATEGORIES 
} from './types';

export const setCategories = categories => ({
    type: SET_CATEGORIES,
    categories
});