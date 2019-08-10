export const getAvailableTasks = () => [
  {
    id: 0,
    name: "Salon",
    description: "Passer l'aspi dans le salon en enlevant les meubles",
    duration: 30
  },
  {
    id: 1,
    name: "Cuisine",
    description:
      "Passer le balai et la toile dans la cuisine et un bout du salon",
    duration: 30
  },
  {
    id: 2,
    name: "Autre",
    description: "Sucer ses colocs",
    duration: 30
  }
];

export const getActionById = userId => {
  if (userId === 1) {
    return [
      {
        id: 0,
        name: "Salon",
        duration: 30,
        date: new Date()
      },
      {
        id: 234,
        name: "Solon",
        duration: 30,
        date: new Date()
      },
      {
        id: 1234,
        name: "Autre",
        description: "Sucer ses colocs",
        duration: 30,
        date: new Date()
      }
    ];
  }
  if (userId === 0) {
    return [];
  }
  if (userId === 2) {
    return [
      {
        id: 0,
        name: "Cuisine",
        duration: 30,
        date: new Date()
      },
      {
        id: 0,
        name: "Cuisine",
        duration: 30,
        date: new Date()
      },
      {
        id: 0,
        name: "Cuisine",
        duration: 30,
        date: new Date()
      },
      {
        id: 0,
        name: "Cuisine",
        duration: 30,
        date: new Date()
      },
      {
        id: 0,
        name: "Cuisine",
        duration: 30,
        date: new Date()
      },
      {
        id: 0,
        name: "Cuisine",
        duration: 30,
        date: new Date()
      }
    ];
  }
};

export const createNewAction = () => {
  console.log("coucou");
};
