import { useWindowDimensions, ImageBackground, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import SkiaGradientRect from './SkiaGradientRect'
import images from '@/constants/images'

function HomeBackground() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <SkiaGradientRect
        width={width}
        height={height}
        colors={['#2E335A', '#1C1B33']}
      />
      <ImageBackground source={images.home.background} resizeMode='cover' style={styles.image} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
  },
})

export default HomeBackground
