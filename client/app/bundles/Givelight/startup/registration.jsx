import ReactOnRails from 'react-on-rails';

import App from './App';
import ManageUsers from '../components/ManageUsers';
import usersStore from '../store/helloWorldStore';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App,
  ManageUsers,
});

ReactOnRails.registerStore({
  usersStore,
});