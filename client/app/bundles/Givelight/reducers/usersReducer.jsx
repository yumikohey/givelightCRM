/* eslint new-cap: 0 */

import Immutable from 'immutable';

import * as actionTypes from '../constants/usersConstants';

export const $$initialState = Immutable.fromJS({
  $$users: [],
  fetchUsersError: null,
  updateUserError: null,
  isFetching: false,
  isSaving: false,
  locale: null,
});

export default function usersReducer($$state = $$initialState, action = null) {
  const { type, user, users, error } = action;

  switch (type) {

    case actionTypes.FETCH_USERS_SUCCESS: {
      return $$state.merge({
        $$users: users,
        fetchUsersError: null,
        isFetching: false,
      });
    }

    case actionTypes.FETCH_USERS_FAILURE: {
      return $$state.merge({
        fetchUsersError: error,
        isFetching: false,
      });
    }l

    case actionTypes.UPDATE_USER_SUCCESS: {
      console.log(users.data);
      return $$state.withMutations(state => (
        state
          .updateIn(
            ['$$users'],
            $$users => Immutable.fromJS(users.data),
          )
          .merge({
            updateUserError: null,
            isSaving: false,
          })
      ));
    }

    case actionTypes.UPDATE_USER_FAILURE: {
      return $$state.merge({
        updateUserError: error,
        isSaving: false,
      });
    }

    case actionTypes.SET_IS_FETCHING: {
      return $$state.merge({
        isFetching: true,
      });
    }

    case actionTypes.SET_IS_SAVING: {
      return $$state.merge({
        isSaving: true,
      });
    }

    default: {
      return $$state;
    }
  }
}
