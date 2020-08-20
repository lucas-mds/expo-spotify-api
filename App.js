import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { GlobalContextProvider } from './src/config/global-context';


// Pages
import Splash from './src/pages/splash/';
import Login from './src/pages/login/';
import Home from './src/pages/home/';
import Playlist from './src/pages/playlist/';

const Stack = createStackNavigator();

const HeaderStyle = {
  headerStyle: {
    backgroundColor: '#5D4CC3',
  },
  headerTintColor: '#fff',
}

export default function App() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, ...HeaderStyle }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false, ...HeaderStyle }} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Minhas Playlists', ...HeaderStyle, headerLeft: () => null }} />
          <Stack.Screen name="Playlist" component={Playlist} options={({ route }) => ({ title: route.params.title, ...HeaderStyle })} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
