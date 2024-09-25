import { Canvas, Rect, LinearGradient, vec, Line } from '@shopify/react-native-skia'
import { ScaledSize, StyleSheet } from 'react-native';
import React from 'react'
import useScaledDimensions from '@/utils/useScaledDimensions'

function HomeSmokeEffect(dimensions: ScaledSize) {
  const { width, height } = dimensions;
  const {
    scaledWidth,
    scaledHeight,
    scaledTop,
    scaledLeft,
    scaleXFactor,
    scaleYFactor,
  } = useScaledDimensions({
    width,
    height,
    baseW: 390,
    baseH: 844,
    targetX: 0,
    targetY: 344,
    targetW: 390,
    targetH: 500,
  });

  /*   
    console.log({ width, height, scaleXFactor, scaleYFactor })
    console.log({ baseW: 390, baseH: 844, targetY: 344 })
    console.log({ scaledHeight, scaledWidth, scaledLeft, scaledTop }) 
  */

  return (
    <Canvas style={{ height: scaledHeight, ...StyleSheet.absoluteFillObject, top: scaledTop, left: scaledLeft }}>
      <Rect x={0} y={0} height={scaledHeight} width={scaledWidth}>
        <LinearGradient
          start={vec(scaledWidth / 2, 0)}
          end={vec(scaledWidth / 2, scaledHeight)}
          colors={['rgba(58,63,84,0)', 'rgba(58,63,84,1)']}
          positions={[0.2, 0.60]}
        />
      </Rect>

      <Line
        p1={vec(scaledWidth / 2, 0)}
        p2={vec(scaledWidth / 2, scaledHeight)}
        strokeWidth={1}
        color={'red'}
      />
    </Canvas>
  )
}

export default HomeSmokeEffect
