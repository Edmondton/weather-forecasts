import fetch from 'isomorphic-fetch';
import Immutable from 'immutable';

const ENDPOINT = 'http://api.github.com/repos/npm/npm/issues?access_token=fffe6541bd86954dbe7b18b46f3666890f5c3bc1';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

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
            .then(response => {
                if (response.state >= 400) {
                    return {};
                }
                return response.json()
            })
            .then(json => dispatch(receivePosts(json)))
    }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
function issues(state = Immutable.List(), {type, payload}) {
    if (!type || !payload) {
        return state;
    }

    switch (type) {
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
