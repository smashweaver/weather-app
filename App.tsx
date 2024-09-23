import { StatusBar } from 'expo-status-bar'
import React from 'react'
import HomeBackground from './components/HomeBackground'

export default function App() {
  return (
    <>
      <HomeBackground />
      <StatusBar style='light' />
    </>
  );
}
