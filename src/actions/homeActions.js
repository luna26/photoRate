import axios from 'axios';

export const loadNewsRequest = (skip) => {
    return dispatch => {
        dispatch({
            type: 'test',
            payload: true
        });
    };
}