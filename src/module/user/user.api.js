import Axios from "axios";
import { API_BASE_URL } from "../../constants";

export const queryUsers = () => Axios.get(`${API_BASE_URL}`);

// export const queryUsers = async () =>
//   new Promise(resolve =>
//     setTimeout(
//       () =>
//         resolve([
//           {
//             id: 1,
//             name: "Amo",
//             iconName: "whatshot"
//           },
//           {
//             id: 2,
//             name: "Fifi",
//             iconName: "local-hotel"
//           },
//           {
//             id: 3,
//             name: "Tutu",
//             iconName: "local-bar"
//           }
//         ]),
//       100
//     )
//   );
