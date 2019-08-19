import { queryActionsByUserIds } from "./action.api";

import { useState } from "react";

const initialState = {
  filteredByUserActions: [],
  actions: [],
  filteringUserIds: [],
  isLoading: false
};

export const useActionStore = () => {
  const [state, setState] = useState(initialState);

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

  const loadActions = async () => {
    try {
      setLoading(true);
      const apiActions = await queryActionsByUserIds(filteringUserIds);
      setFilteredByUserActions(apiActions);
    } catch (error) {
      console.log("actions could not be loaded", { error });
    } finally {
      setLoading(false);
    }
  };

  const setFilteringUsersId = async userIds => {
    setState(oldState => ({ ...oldState, filteringUserIds: userIds }));
    await loadActions();
  };

  return {
    filteredByUserActions,
    isLoading,
    loadActions,
    setFilteringUsersId
  };
};
