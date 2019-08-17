import { useContext } from "react";
import { MyContext } from "./me.context";
import { queryMyMonthlyTodos } from "./me.api";

export const useMyStore = () => {
  const [state, setState] = useContext(MyContext);

  const me = state.me;
  const myMonthlyTodos = state.myMonthlyTodos;

  const isLoading = state.isLoading;

  const setMe = newMe => {
    setState(oldState => ({ ...oldState, me: newMe }));
  };

  const setLoading = value => {
    setState(oldState => ({ ...oldState, isLoading: value }));
  };

  const setMyMonthlyTodos = todos => {
    setState(oldState => ({ ...oldState, myMonthlyTodos: todos }));
  };

  const loadMyMonthlyTodos = async () => {
    try {
      setLoading(true);
      const myTodos = await queryMyMonthlyTodos(me.id);
      setMyMonthlyTodos(myTodos);
    } catch (error) {
      console.log("Error during fetching my date", { error });
    } finally {
      setLoading(false);
    }
  };

  return {
    me,
    setMe,
    isLoading,
    myMonthlyTodos,
    loadMyMonthlyTodos
  };
};
