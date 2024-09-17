import { Canvas, Rect, LinearGradient, vec } from '@shopify/react-native-skia';
import React from 'react'

interface SkiaGradientRectProps {
  width: number;
  height: number;
  colors: string[];
}

function SkiaGradientRect({ width, height, colors }: SkiaGradientRectProps) {
  // console.log({ width, height, colors })
  return (
    <Canvas style={{ flex: 1 }}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={colors}
        />
      </Rect>
    </Canvas>
  )
}

export default SkiaGradientRect
