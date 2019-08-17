import { queryActions } from "./action.api";

import { useState } from "react";

const initialState = {
  filteredByUserActions: [],
  actions: [],
  filteringUserIds: [],
  isLoading: false
};

export const useActionStore = () => {
  const [state, setState] = useState(initialState);

  const actions = state.actions;
  const isLoading = state.isLoading;
  const filteredByUserActions = state.filteredByUserActions;
  const filteringUserIds = state.filteringUserIds;

  const setFilteredByUserActions = newActions => {
    setState(oldState => ({
      ...oldState,
      filteredByUserActions: newActions
    }));
  };
  const setLoading = value => {
    setState(oldState => ({ ...oldState, isLoading: value }));
  };

  const setActions = newActions => {
    setState(oldState => ({ ...oldState, actions: newActions }));
  };

  const loadActions = async () => {
    try {
      setLoading(true);
      const apiActions = await queryActions();
      const filteredAction = apiActions.filter(action =>
        filteringUserIds.includes(action.userId)
      );
      setActions(apiActions);
      setFilteredByUserActions(filteredAction);
    } catch (error) {
      console.log("actions could not be loaded", { error });
    } finally {
      setLoading(false);
    }
  };

  const setFilteringUsersId = userIds => {
    const filteredAction = actions.filter(action =>
      userIds.includes(action.userId)
    );
    setState(oldState => ({ ...oldState, filteringUserIds: userIds }));
    setFilteredByUserActions(filteredAction);
  };

  return {
    actions,
    filteredByUserActions,
    isLoading,
    loadActions,
    setFilteringUsersId
  };
};
