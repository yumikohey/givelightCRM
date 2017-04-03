import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ManageUsers from '../components/ManageUsers';
import BaseComponent from '../../libs/BaseComponent';
import * as usersActionCreators from '../actions/usersActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { data: state.$$usersStore };
}

class ManageUsersContainer extends BaseComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };

  render() {
    let { data, dispatch } = this.props;
    let actions = bindActionCreators(usersActionCreators, dispatch);
    return (
        <div>
          <ManageUsers {...{ actions, data }} />
        </div>
    );
  }
}

// Don't forget to actually use connect!
export default connect(select)(ManageUsersContainer);