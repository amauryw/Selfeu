export const queryMyAction = async userId =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          {
            id: 8,
            name: "Cuisine",
            duration: 30,
            date: new Date()
          },
          {
            id: 8,
            name: "Salon",
            duration: 30,
            date: new Date()
          },
          {
            id: 8,
            name: "Qwack",
            duration: 30,
            date: new Date()
          }
        ]),
      300
    )
  );
