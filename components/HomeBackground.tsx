import { useWindowDimensions, ImageBackground, View } from 'react-native'
import React from 'react'
import SkiaGradientRect from './SkiaGradientRect'
import images from '@/constants/images'
import HomeImage from './HomeImage'

function HomeBackground() {
  const dimensions = useWindowDimensions();
  const { width, height } = dimensions;

  return (
    <View style={{ flex: 1 }}>
      <SkiaGradientRect
        width={width}
        height={height}
        colors={['#2E335A', '#1C1B33']}
      />
      <ImageBackground source={images.home.background} resizeMode='stretch' style={{ height: height }}>
        <HomeImage {...dimensions} />
      </ImageBackground>
    </View>
  )
}

export default HomeBackground
