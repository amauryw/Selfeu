export const queryUsers = async () =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: "Amo"
          },
          {
            id: 2,
            name: "Fifi"
          },
          {
            id: 3,
            name: "Tutu"
          }
        ]),
      0
    )
  );
