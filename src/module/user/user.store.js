import { useContext } from "react";
import { UserContext } from "./user.context";
import { queryUsers } from "./user.api";

export const useUserStore = () => {
  const [state, setState] = useContext(UserContext);

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
    setState(old => ({ ...old, isLoading: value }));
  };

  const setUsers = newUsers => {
    setState(old => ({ ...old, users: newUsers }));
  };

  return {
    isLoading,
    users,
    loadUsers
  };
};
