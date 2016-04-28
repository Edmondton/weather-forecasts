import fetch from 'isomorphic-fetch';
import Immutable from 'immutable';

const ENDPOINT = 'http://api.github.com/repos/npm/npm/issues?access_token=a1efabeac942359fab7d7f8866c35192a8c11f25';
export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
export const SELECT_ISSUE = 'SELECT_ISSUE';

// Actions
export function fetchPostsIfNeeded() {
    return (dispatch) => {
        return dispatch(fetchPosts())
    }
}

export function selectIssue(issue) {
    return {
        type: SELECT_ISSUE,
        payload: issue
    };
}

function requestPosts() {
    return {
        type: REQUEST_ISSUES
    }
}

function receivePosts(json) {
    return {
        type: RECEIVE_ISSUES,
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
// Reducer
// ------------------------------------
function issues(state = Immutable.List(), {type, payload}) {
    if (!type || !payload) {
        return state;
    }

    switch (type) {
        case RECEIVE_ISSUES:
        case REQUEST_ISSUES:
            return Immutable.fromJS(payload);
        default:
            return state;
    }
}

function selectedIssue (state = Immutable.Map(), {type, payload}) {
    if (!type || !payload) {
        return state;
    }

    switch (type) {
      case SELECT_ISSUE:
          return payload;
      default:
          return state;
    }
}

export default function rootReducer(state = Immutable.Map(), action) {
    return state.merge({
        issues: issues(state.get('issues'), action),
        selectedIssue: selectedIssue(state.get('selectedIssue'), action)
    });
}
