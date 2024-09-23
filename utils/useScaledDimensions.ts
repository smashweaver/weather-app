import { ScaledSize } from 'react-native';

type OrigDimensions = ScaledSize & {
  baseW: number   // Base width for scaling (e.g., Figma width)
  baseH: number   // Base height for scaling (e.g., Figma height)
  targetX: number  // Original x position of the image
  targetY: number  // Original y position of the image
  targetW: number  // Original width of the image
  targetH: number  // Original height of the image
};

const useScaledDimensions = ({
  width,
  height,
  baseW,
  baseH,
  targetX,
  targetY,
  targetW,
  targetH,
}: OrigDimensions) => {
  // Calculate scale factors based on base dimensions
  const scaleFactorWidth = width / baseW;
  const scaleFactorHeight = height / baseH;

  // Scale the image's width and height based on the width and height scale factors
  const scaledWidth = Math.min(targetW * scaleFactorWidth, width);
  const scaledHeight = targetH * scaleFactorHeight; // Scaling based on height factor for uniformity

  // Calculate the top position using height scaling (based on original Y position)
  const scaledTop = targetY * scaleFactorHeight

  // Calculate left to center the image horizontally
  const scaledLeft = (width - scaledWidth) / 2; // Center horizontally based on width

  return {
    scaledWidth,
    scaledHeight,
    scaledTop,
    scaledLeft,
    widthScaleFactor: scaleFactorWidth,
    heightScaleFactor: scaleFactorHeight,
  };
};

export default useScaledDimensions;
