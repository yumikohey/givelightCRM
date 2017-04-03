import React from 'react';
import { Provider } from 'react-redux';
import ReactOnRails from 'react-on-rails';

import ManageUsersContainer from '../containers/ManageUsersContainer';

export default (_props, _railsContext) => {
  const store = ReactOnRails.getStore('usersStore');
  console.log(store);
  return (
    <Provider store={store}>
      <ManageUsersContainer />
    </Provider>
  );
};