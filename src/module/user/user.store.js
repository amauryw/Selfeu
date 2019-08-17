import { useState } from "react";
import { queryUsers } from "./user.api";
const initialState = {
  users: [],
  isLoading: false
};

export const useUserStore = () => {
  const [state, setState] = useState(initialState);

  const users = state.users;

  const isLoading = state.isLoading;

  const loadUsers = async () => {
    try {
      setLoading(true);
      const apiUsers = await queryUsers();
      setUsers(apiUsers);
    } catch (error) {
      console.log("Error during user query", { error });
    } finally {
      setLoading(false);
    }
  };

  const setLoading = value => {
    setState(oldState => ({ ...oldState, isLoading: value }));
  };

  const setUsers = newUsers => {
    setState(oldState => ({ ...oldState, users: newUsers }));
  };

  return {
    isLoading,
    users,
    loadUsers
  };
};
