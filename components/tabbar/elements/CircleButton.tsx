import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Canvas, Circle, Line, LinearGradient, Shadow, vec } from '@shopify/react-native-skia'

type CircleButtonProps = {
  radius: number
}

const CircleButton = ({ radius }: CircleButtonProps) => {
  const diameter = radius * 2
  return (
    <Canvas style={{ width: diameter, height: diameter }}>
      <Circle cx={radius} cy={radius} r={radius}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(diameter, diameter)}
          colors={['#F5F5F9', '#DADFE7']} />
        <Shadow dx={1} dy={1} blur={0.5} color={'white'} inner />
      </Circle>
      <Line
        p1={vec(radius - radius / 3, radius)}
        p2={vec(radius + radius / 3, radius)}
        style={'stroke'}
        strokeCap={'round'}
        strokeWidth={4}
        color={'#48319D'}
      />
      <Line
        p1={vec(radius, radius - radius / 3)}
        p2={vec(radius, radius + radius / 3)}
        style={'stroke'}
        strokeCap={'round'}
        strokeWidth={4}
        color={'#48319D'}
      />
    </Canvas>
  )
}

export default CircleButton
/*
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2692 22.1289C10.2692 23.2773 11.1989 24.207 12.3474 24.207H19.9352V31.7949C19.9352 32.9297 20.8513 33.873 21.9997 33.873C23.1481 33.873 24.0778 32.9297 24.0778 31.7949V24.207H31.6657C32.8005 24.207 33.7302 23.2773 33.7302 22.1289C33.7302 20.9941 32.8005 20.0645 31.6657 20.0645H24.0778V12.4766C24.0778 11.3418 23.1481 10.3984 21.9997 10.3984C20.8513 10.3984 19.9352 11.3418 19.9352 12.4766V20.0645H12.3474C11.1989 20.0645 10.2692 20.9941 10.2692 22.1289Z" fill="#48319D"/>
</svg>
*/

/*
<svg width="118" height="100" viewBox="0 0 118 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_ddi_56_515)">
<circle cx="59" cy="44" r="29" fill="url(#paint0_linear_56_515)"/>
<circle cx="59" cy="44" r="28.9" stroke="url(#paint1_linear_56_515)" stroke-width="0.2"/>
</g>
<defs>
<linearGradient id="paint0_linear_56_515" x1="44" y1="23" x2="75.5" y2="67.8333" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F9"/>
<stop offset="1" stop-color="#DADFE7"/>
</linearGradient>
<linearGradient id="paint1_linear_56_515" x1="38.8333" y1="24.8333" x2="73.1667" y2="70.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#AEAEAE"/>
</linearGradient>
</defs>
</svg>
*/
