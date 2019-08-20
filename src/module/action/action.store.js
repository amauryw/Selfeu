import { queryActionsByUserIds, updateActionById } from "./action.api";

import { useState } from "react";

const initialState = {
  filteredByUserActions: [],
  actions: [],
  filteringUserIds: [],
  isLoading: false,
  hasErrored: false
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

  const setHasErrored = value => {
    setState(oldState => ({ ...oldState, hasErrored: value }));
  };
  const executeAction = async (actionId, doneValue) => {
    try {
      setLoading(true);
      await updateActionById(actionId, doneValue);
    } catch (error) {
      console.log("actions could not be executed", { error });
    } finally {
      setLoading(false);
    }
  };

  const loadActions = async () => {
    try {
      setLoading(true);
      setHasErrored(false);
      const apiActions = await queryActionsByUserIds(filteringUserIds);
      setFilteredByUserActions(apiActions);
    } catch (error) {
      console.log("actions could not be loaded", { error });
      setHasErrored(true);
    } finally {
      setLoading(false);
    }
  };

  const setFilteringUsersId = userIds => {
    setState(oldState => ({ ...oldState, filteringUserIds: userIds }));
  };

  return {
    executeAction,
    filteringUserIds,
    filteredByUserActions,
    isLoading,
    loadActions,
    setFilteringUsersId
  };
};
