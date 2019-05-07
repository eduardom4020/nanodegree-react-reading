import { 
    SET_COMMENTS
} from './types';

// import { MainStore } from '../store/base-stores';

export const setComments = (comments=null) => {
    try {
        return {
            type: SET_COMMENTS,
            comments
        }
    } catch(err) {
        console.error('On setting posts: ', err);
    }
};