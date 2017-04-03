import React, { PropTypes } from 'react';
import BaseComponent from '../../libs/BaseComponent';
import _ from 'lodash';
// import { UsersPropTypes } from './Users/UsersPropTypes';
// import Immutable from 'immutable';
// import ActionCable from 'actioncable';

export default class ManageUsers extends BaseComponent {
  static propTypes = {
    actions: PropTypes.shape({
      fetchUsers: React.PropTypes.function,
      updateUser: React.PropTypes.function,
    }),
    data: PropTypes.shape({
      $$users: React.PropTypes.array,
    }).isRequired,
  };

  constructor() {
    super();

    _.bindAll(this, [
      'handleChange',
    ]);
  }

  componentDidMount() {
    const { fetchUsers } = this.props.actions;
    // fetchUsers('/manage_users');
  }

  handleChange = (id, e) => {
      const { data, actions } = this.props;
      let user = data.get("$$users").find(user => user.get("id") === id);
      let payload = {
          id,
          role: e.target.value
      }

      actions
        .updateUser(payload)
  };

  render() {
    const { actions, data } = this.props;
    console.log(data);
    let users = data.get("$$users");
    let _this = this;
    let li = users.map(function(user) {
      return (
          <div key={user.get("id")} className="row">
              <div className="col-md-4">{user.get("email")}</div>
              <div className="col-md-4">
                <select name="role" defaultValue={user.get("role")} onChange={(e) => _this.handleChange(user.get("id"), e)}>
                    <option value="volunteer">Volunteer</option>
                    <option value="pm">PM</option>
                    <option value="admin">Admin</option>
                </select>
              </div>
          </div>
      );
    });
    return (
      <div>
        {li}
      </div>
    );
  }
}
