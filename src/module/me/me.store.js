import { useState } from "react";
import { queryMyMonthlyTodos } from "./me.api";

const initialState = {
  me: {
    id: 1,
    name: "Amaury"
  },
  myMonthlyTodos: [],
  isLoading: false
};

export const useMyStore = () => {
  const [state, setState] = useState(initialState);

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
