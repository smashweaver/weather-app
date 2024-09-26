import { useWindowDimensions, ScaledSize, StatusBar } from "react-native";

const useApplicationDimensions = (): ScaledSize => {
  const { width, height, fontScale, scale } = useWindowDimensions();

  return {
    width,
    height: height + (StatusBar?.currentHeight || 0),
    scale,
    fontScale,
  };
};

export default useApplicationDimensions;
