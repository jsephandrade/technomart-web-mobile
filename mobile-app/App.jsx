import 'react-native-gesture-handler';
import React from 'react';
// import { TailwindProvider } from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './src/navigation/RootNavigator';
import './global.css'; // Ensure global styles are imported

export default function App() {
  return (
    // <TailwindProvider>
    //   <NavigationContainer>
    //     <RootNavigator />
    //   </NavigationContainer>
    // </TailwindProvider>
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
