import { StyleSheet, View } from 'react-native'
import React from 'react'
import ArcComponent from './elements/ArcComponent'
import useApplicationDimensions from '@/utils/useApplicationDimensions'
import TabbarItems from './elements/TabbarItems'

const WeatherTabBar = () => {
  const { width, height } = useApplicationDimensions()
  const TabBarHeight = height * (88 / 844)
  const TabBarTop = (height - TabBarHeight)
  // console.log({ height, width, TabBarHeight, TabBarTop })
  return (
    <View style={{ ...StyleSheet.absoluteFillObject, height: TabBarHeight, top: TabBarTop }}>
      <ArcComponent height={TabBarHeight} width={width} />
      <TabbarItems />
    </View>
  )
}

export default WeatherTabBar
