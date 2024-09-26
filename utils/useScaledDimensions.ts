import { designH, designW } from "@/constants/design";

type OrigDimensions = {
  width: number; // device width
  height: number; // device height
  baseW?: number; // Base width for scaling (e.g., Figma width)
  baseH?: number; // Base height for scaling (e.g., Figma height)
  targetX?: number; // Original x position of the image
  targetY?: number; // Original y position of the image
  targetW: number; // Original width of the image
  targetH: number; // Original height of the image
};

const useScaledDimensions = ({
  width,
  height,
  targetW,
  targetH,
  targetX = 0,
  targetY = 0,
  baseW = designW,
  baseH = designH,
}: OrigDimensions) => {
  const scaleXFactor = width / baseW;
  const scaleYFactor = height / baseH;
  const scaledWidth = Math.min(targetW * scaleXFactor, width);
  const scaledHeight = Math.min(targetH * scaleYFactor, height);
  const scaledTop = targetY * scaleYFactor;
  const scaledLeft = targetX * scaleXFactor;

  return {
    scaledWidth,
    scaledHeight,
    scaledTop,
    scaledLeft,
    scaleXFactor,
    scaleYFactor,
  };
};

export default useScaledDimensions;
