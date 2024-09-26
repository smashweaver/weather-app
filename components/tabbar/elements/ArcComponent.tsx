import React from 'react'
import { StyleSheet } from 'react-native'
import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia'

interface ArccomponentProps {
  height: number
  width: number
}

const ArcComponent = ({ height, width }: ArccomponentProps) => {
  const arcPath = `M0 0 Q ${width / 2} ${height / 2} ${width} 0 L${width} ${height} L0 ${height} Z`
  const arcBorder = `M0 0 Q${width / 2} ${height / 2} ${width} 0`
  return (
    <Canvas style={{ ...StyleSheet.absoluteFillObject, height }}>
      <Path path={arcPath}>
        <LinearGradient
          start={vec(width / 2, 0)}
          end={vec(width / 2, height)}
          colors={['rgba(58,58,106,1)', 'rgba(37,36,36,76,1)']}
        />
      </Path>

      <Path path={arcBorder} style='stroke' strokeWidth={0.5} color={'rgba(117,130,244,0.5)'} />
    </Canvas>
  )
}

export default ArcComponent

/*
<svg width="390" height="89" viewBox="0 0 390 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_50_2332)">
<path d="M0 1C0 1 76.0769 16.9822 127 21C153.339 23.0782 168.554 24 195 24C221.446 24 235.661 23.0782 262 21C312.923 16.9822 390 1 390 1V89H0V1Z" fill="url(#paint0_linear_50_2332)" fill-opacity="0.26"/>
<path d="M0 1L0.0513978 0.755341L-0.25 0.692023V1V89V89.25H0H390H390.25V89V1V0.692844L389.949 0.755207L390 1C389.949 0.755207 389.949 0.755266 389.948 0.755386L389.946 0.755929L389.935 0.758104L389.893 0.766774L389.727 0.801111C389.58 0.831451 389.36 0.876545 389.072 0.935541C388.495 1.05353 387.643 1.22713 386.539 1.44951C384.333 1.89427 381.124 2.53416 377.113 3.31459C369.093 4.87548 357.868 6.99851 345.053 9.24707C319.42 13.7446 287.43 18.7428 261.98 20.7508C235.644 22.8287 221.437 23.75 195 23.75C168.563 23.75 153.355 22.8286 127.02 20.7508C101.571 18.7428 69.8304 13.7446 44.4475 9.24714C31.757 6.99859 20.6577 4.87557 12.731 3.3147C8.76767 2.53427 5.59756 1.89439 3.41838 1.44963C2.32879 1.22725 1.48694 1.05366 0.917538 0.935668C0.632837 0.876674 0.416248 0.831581 0.270862 0.801242L0.10657 0.766906L0.0651988 0.758237L0.054834 0.756062L0.0522476 0.755519C0.0516779 0.755399 0.0513978 0.755341 0 1Z" stroke="#7582F4" stroke-opacity="0.5" stroke-width="0.5"/>
</g>
<defs>
<filter id="filter0_b_50_2332" x="-50.5" y="-49.616" width="491" height="189.116" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="25"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_50_2332"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_50_2332" result="shape"/>
</filter>
<linearGradient id="paint0_linear_50_2332" x1="271.51" y1="1" x2="271.51" y2="89" gradientUnits="userSpaceOnUse">
<stop stop-color="#3A3A6A"/>
<stop offset="1" stop-color="#25244C"/>
</linearGradient>
</defs>
</svg>
*/
