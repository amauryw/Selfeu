import { Dimensions } from "react-native";

class MyDeviceDef {
  constructor() {
    this.windowWidth = Dimensions.get("window").width;
  }
}

export const MyDevice = new MyDeviceDef();
