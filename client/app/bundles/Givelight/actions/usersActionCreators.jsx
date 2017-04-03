import requestsManager from '../../libs/requestsManager';
import * as actionTypes from '../constants/usersConstants';

export function setIsFetching() {
  return {
    type: actionTypes.SET_IS_FETCHING,
  };
}

export function setIsSaving() {
  return {
    type: actionTypes.SET_IS_SAVING,
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users,
  };
}

export function fetchUsersFailure(error) {
  return {
    type: actionTypes.FETCH_USERS_FAILURE,
    error,
  };
}

export function updateUserSuccess(users) {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    users,
  };
}

export function updateUserFailure(error) {
  return {
    type: actionTypes.UPDATE_USER_FAILURE,
    error,
  };
}


export function fetchUsers() {
  const url = 'manage_users';
  return (dispatch) => {
    dispatch(setIsFetching());
    return (
      requestsManager
        .fetchEntities(url)
        .then(res => dispatch(fetchUsersSuccess(res)))
    );
  };
}

// export function submitUser(user) {
//   return (dispatch) => {
//     dispatch(setIsSaving());
//     return (
//       requestsManager
//         .submitEntity({ user })
//         .then(res => dispatch(submitUserSuccess(res.data)))
//         .catch(error => dispatch(submitUserFailure(error)))
//     );
//   };
// }

export function updateUser(data) {
  return (dispatch) => {
    dispatch(setIsSaving());
    return (
      requestsManager
        .submitEntity({ data })
        .then(res => dispatch(updateUserSuccess(res)))
        // .catch(error => dispatch(updateUserFailure(error)))
    );
  }
}
