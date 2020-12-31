import { PixelRatio, Platform, StatusBar } from "react-native";
import Dimensions from "./Dimensions";

const scale = Dimensions.width / 320;

export default (size) => {
  const newSize = scale * size;
  if (Platform.OS === "android") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
};
