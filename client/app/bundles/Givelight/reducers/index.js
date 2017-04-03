import usersReducer, { $$initialState as $$usersState } from './usersReducer';
import railsContextReducer, { initialState as railsContextState } from './railsContextReducer';

export default {
  $$usersStore: usersReducer,
  railsContext: railsContextReducer,
};

export const initialStates = {
  $$usersState,
  railsContextState,
};

