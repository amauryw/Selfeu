import { useState } from "react";
import { queryTasks } from "./task.api";

const initialState = {
  tasks: [],
  isLoading: false
};
export const useTaskStore = () => {
  const [state, setState] = useState(initialState);

  const tasks = state.tasks;
  const isLoading = state.isLoading;

  const setTasks = newTasks => {
    setState(oldState => ({ ...oldState, tasks: newTasks }));
  };

  const setLoading = value => {
    setState(oldState => ({ ...oldState, isLoading: value }));
  };

  const loadTasks = async () => {
    try {
      setLoading(true);
      const newTakss = await queryTasks();
      setTasks(newTakss);
    } catch (error) {
      console.log("Error during fetching my date", { error });
    } finally {
      setLoading(false);
    }
  };

  return {
    tasks,
    loadTasks,
    isLoading
  };
};
