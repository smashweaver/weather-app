import { useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import SkiaGradientRect from './SkiaGradientRect';

function HomeBackground() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SkiaGradientRect
        width={width}
        height={height}
        colors={['#2E335A', '#1C1B33']}
      />
    </SafeAreaView>
  )
}

export default HomeBackground
