import { useContext } from "react";
import { TaskContext } from "./task.context";
import { queryTasks } from "./task.api";

export const useTaskStore = () => {
  const [state, setState] = useContext(TaskContext);

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
