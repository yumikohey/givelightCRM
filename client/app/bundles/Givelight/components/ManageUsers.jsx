import React, { PropTypes } from 'react';
import requestsManager from '../../../libs/requestsManager';

export default class ManageUsers extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  /**
   * @param props - Comes from your rails view.
   * @param _railsContext - Comes from React on Rails
   */
  constructor(props, _railsContext) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { 
                    users: this.props.users,
                  };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (id, e) => {
      let user = this.state.users.find(function (ele) {
          return ele.id === id;
      });
      user.role = e.target.value;
      requestsManager
          .submitEntity({ user })
          .then(res => console.log(res))
  };
  render() {
      let _this = this;
      let li = this.state.users.map(function(user) {
      return (
          <div key={user.id} className="row">
              <div className="col-md-4">{user.email}</div>
              <div className="col-md-4">
                <select name="role" defaultValue={user.role} onChange={(e) => _this.handleChange(user.id, e)}>
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
