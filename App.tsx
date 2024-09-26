import { StatusBar } from 'expo-status-bar'
import React from 'react'
import HomeBackground from './components/HomeBackground'
import WeatherTabBar from './components/tabbar/WeatherTabBar';

export default function App() {
  return (
    <>
      <HomeBackground />
      <WeatherTabBar />
      <StatusBar style='light' />
    </>
  );
}
