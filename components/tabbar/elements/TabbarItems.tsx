import React from 'react'
import MapIcon from '../icons/MapIcon'
import ListIcon from '../icons/ListIcon'
import TrapezoidBackground from './TrapezoidBackground'
import useApplicationDimensions from '@/utils/useApplicationDimensions'
import CircleButton from './CircleButton'
import { Pressable, StyleSheet, View } from 'react-native'

const TabbarItems = () => {
  const { width, height } = useApplicationDimensions()
  const trapezoidHeight = height * (100 / 844)
  const trapezoidWidth = width * (266 / 390)
  const circleRadius = (trapezoidHeight * (58 / 100)) / 2
  const buttonCenterX = width / 2 - circleRadius
  console.log({ trapezoidHeight, trapezoidWidth, circleRadius, buttonCenterX })
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 32
    }}>
      <MapIcon />
      <TrapezoidBackground height={trapezoidHeight} width={trapezoidWidth} />
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          left: buttonCenterX,
          top: 12,
          width: circleRadius * 2,
          height: circleRadius * 2,
        }}
      >
        {({ pressed }: { pressed: boolean }) => (
          <CircleButton
            radius={circleRadius}
            pressed={pressed}
          />
        )}
      </Pressable>

      <ListIcon />
    </View>
  )
}

export default TabbarItems
