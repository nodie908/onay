import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavTab from './components/BottomNavTab';
// import { createStackNavigator } from '@react-navigation/stack';


const App = () => {
  return (
    <NavigationContainer>
      <BottomNavTab />
    </NavigationContainer>
  )
}


export default App;