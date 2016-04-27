import fetch from 'isomorphic-fetch';
import Immutable from 'immutable';

const ENDPOINT = 'http://api.github.com/repos/npm/npm/issues';
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function fetchPostsIfNeeded() {
    return (dispatch, getState) => {
        return dispatch(fetchPosts())
    }
}

function requestPosts() {
    return {
        type: REQUEST_POSTS
    }
}

function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        payload: json,
        receivedAt: Date.now()
    }
}

function fetchPosts() {
    return dispatch => {
        dispatch(requestPosts())
        return fetch(ENDPOINT)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
function issues(state = Immutable.List(), action) {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Immutable.fromJS(payload);
        default:
            return state;
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function issuesReducer(state = Immutable.Map(), action) {
    return state.merge({
        issues: issues(state.get('issues'), action)
    });
}