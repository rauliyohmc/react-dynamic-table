import { handleActions } from 'redux-actions';
import * as constants from '../constants/actionConstants';
import moment from 'moment';

const initialState = {
  isLoggingIn: false,
  username: '',
  postsPerPage: 5,
  currentPage: 1,
  posts: [],
};

const handleLoginRequest = (state, { payload }) => ({
  ...state,
  ...{ isLoggingIn: true, username: payload.username },
});

const handleLoginSuccess = (state, { payload }) => ({
  ...state,
  ...{ isLoggingIn: false, posts: payload.posts },
});

const processLogout = state => initialState;

export default handleActions({
  [constants.LOGIN_REQUEST]: handleLoginRequest,
  [constants.LOGIN_SUCCESS]: handleLoginSuccess,
  [constants.PROCESS_LOGOUT]: processLogout,
}, initialState);

/** Selectors */

export const getPostsSelector = state =>
  state.posts.map(post => ({...post, ...{ createdAt: moment(post.createdAt).format('YYYY-MM-DD')}}));
