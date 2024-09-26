import { ImageBackground, View, StyleSheet } from 'react-native'
import React from 'react'
import SkiaGradientRect from './SkiaGradientRect'
import images from '@/constants/images'
import HomeImage from './HomeImage'
import HomeSmokeEffect from './HomeSmokeEffect'
import useApplicationDimensions from '@/utils/useApplicationDimensions'

function HomeBackground() {
  const dimensions = useApplicationDimensions();
  const { width, height } = dimensions;

  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <SkiaGradientRect
        width={width}
        height={height}
        colors={['#2E335A', '#1C1B33']}
      />
      <ImageBackground
        source={images.home.background}
        resizeMode='stretch'
        style={{ height }}
      >
        <HomeImage {...dimensions} />
        <HomeSmokeEffect {...dimensions} />
      </ImageBackground>
    </View>
  )
}

export default HomeBackground
