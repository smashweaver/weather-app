import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import HomeBackground from './components/HomeBackground'

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeBackground />
    </SafeAreaProvider>
  );
}
