import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './src/view/Login/Login';
import Home from './src/view/Home/Home';
import Schedule from './src/view/schedule/schedule';
import Perfil from './src/view/Perfil/Perfil';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Perfil">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Schedule" component={Schedule} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
