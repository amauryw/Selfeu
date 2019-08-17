export const queryMyMonthlyTodos = async userId =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: "Cuisine",
            duration: 30,
            date: new Date()
          },
          {
            id: 2,
            name: "Salon",
            duration: 30,
            date: new Date()
          },
          {
            id: 3,
            name: "Qwack",
            duration: 30,
            date: new Date()
          }
        ]),
      300
    )
  );
