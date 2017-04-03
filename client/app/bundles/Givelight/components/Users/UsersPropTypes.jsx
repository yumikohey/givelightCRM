import React, { PropTypes } from 'react';
import Immutable from 'immutable';

export const UsersPropTypes = {
  $$users: PropTypes.instanceOf(Immutable.List).isRequired,
  error: PropTypes.any,
};