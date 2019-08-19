import Axios from "axios";
import { API_BASE_URL } from "../../constants";

export const queryActionsByUserIds = userIds =>
  Axios.get(`${API_BASE_URL}/`, { userIds });

export const queryActions = async () =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve([
          {
            id: 1,
            name: "Salon",
            userId: 1,
            duration: 30,
            date: new Date()
          },
          {
            id: 2,
            name: "Autre",
            userId: 1,
            description: "Sucer ses colocs",
            duration: 30,
            date: new Date()
          },
          {
            id: 3,
            name: "Solon",
            userId: 1,
            duration: 30,
            date: new Date()
          },
          {
            id: 4,
            name: "Cuisine",
            duration: 30,
            userId: 1,
            date: new Date()
          },
          {
            id: 5,
            userId: 2,
            name: "Cuisine",
            duration: 30,
            date: new Date()
          },
          {
            id: 6,
            name: "Cuisine",
            userId: 2,
            duration: 30,
            date: new Date()
          },
          {
            id: 7,
            name: "Cuisine",
            userId: 3,
            duration: 30,
            date: new Date()
          },
          {
            id: 8,
            name: "Cuisine",
            userId: 3,
            duration: 30,
            date: new Date()
          },
          {
            id: 9,
            name: "Cuisine",
            userId: 3,
            duration: 30,
            date: new Date()
          }
        ]),
      300
    )
  );
