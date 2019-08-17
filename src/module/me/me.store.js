import { useContext } from "react";
import { MyContext } from "./me.context";

export const useMyStore = () => {
  const [state] = useContext(MyContext);

  const me = state.me;

  const myWeeklyActions = state.myWeeklyActions;
  const myMonthlyActions = state.myMonthlyActions;

  return {
    me,
    myWeeklyActions,
    myMonthlyActions
  };
};
