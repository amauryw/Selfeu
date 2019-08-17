import { queryActions } from "./action.api";

import { useContext } from "react";
import { ActionContext } from "./action.context";

export const useActionStore = () => {
  const [state, setState] = useContext(ActionContext);

  const actions = state.actions;
  const isLoading = state.isLoading;
  const filteredByUserActions = state.filteredByUserActions;
  const filteringUserIds = state.filteringUserIds;

  const setFilteredByUserActions = newActions => {
    setState(old => ({
      ...old,
      filteredByUserActions: newActions
    }));
  };
  const setLoading = value => {
    setState(old => ({ ...old, isLoading: value }));
  };

  const setActions = newActions => {
    setState(old => ({ ...old, actions: newActions }));
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
    setState(old => ({ ...old, filteringUserIds: userIds }));
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
