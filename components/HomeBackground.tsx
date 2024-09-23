import { useWindowDimensions, ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import SkiaGradientRect from './SkiaGradientRect'
import images from '@/constants/images'

function HomeBackground() {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <SkiaGradientRect
        width={width}
        height={height}
        colors={['#2E335A', '#1C1B33']}
      />
      <ImageBackground source={images.home.background} resizeMode='cover' style={styles.imageBackground} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: '100%',
    width: '100%',
  },
})

export default HomeBackground
