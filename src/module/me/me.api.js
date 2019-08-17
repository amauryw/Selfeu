import { red } from "ansi-colors";

export const queryMyMonthlyTodos = async userId =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: "Cuisine",
            color: "red",
            duration: 30,
            date: new Date()
          },
          {
            id: 2,
            name: "Salon",
            color: "blue",
            duration: 30,
            date: new Date()
          },
          {
            id: 3,
            name: "Qwack",
            color: "green",
            duration: 30,
            date: new Date()
          }
        ]),
      300
    )
  );
