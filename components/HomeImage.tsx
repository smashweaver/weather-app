import { ScaledSize } from 'react-native';
import { Image } from 'react-native'
import React from 'react'
import useScaledDimensions from '@/utils/useScaledDimensions'
import images from '@/constants/images'

function HomeImage(dimensions: ScaledSize) {
  const { width, height } = dimensions;
  const { scaledWidth, scaledHeight, scaledTop, scaledLeft } = useScaledDimensions({
    ...dimensions,
    targetX: 0,
    targetY: 304,
    targetW: 390,
    targetH: 390,
    baseW: 390,
    baseH: 844,
  });

  console.log({ _: 'HomeImage', height, width, scaledHeight, scaledTop })

  return (
    <Image
      source={images.home.house}
      resizeMode='stretch'
      style={{
        width: scaledWidth,
        height: scaledHeight,
        position: 'absolute',
        left: scaledLeft,
        top: scaledTop,
      }}
    />
  )
}

export default HomeImage
