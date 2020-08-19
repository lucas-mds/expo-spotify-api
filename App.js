import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { GlobalContextProvider } from './src/config/global-context';


// Pages
import Splash from './src/pages/splash/';
import Login from './src/pages/login/';
import Home from './src/pages/home/';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
