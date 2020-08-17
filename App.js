import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { GlobalContextProvider, useGlobalContext } from './src/config/global-context';

WebBrowser.maybeCompleteAuthSession();

// Pages
import Splash from './src/pages/splash/';
import Login from './src/pages/login/';

const Stack = createStackNavigator();

export default function App() {
  // const fetchProfile = () => {
  //   spotify_api.get('/v1/me', { headers: { Authorization: `Bearer ${token}` } })
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error.response));
  // }

  // const Zapzap = () => {   
  //   const { loading, setLoading } = useGlobalContext();
  //   console.log(loading)
  //   return (
  //     <View>
  //       <Text>oi</Text>
  //       <Button title="toggle loading" onPress={() => setLoading(!loading)}/>
  //     </View>
  //   )
  // }

  // return (
  //   <GlobalContextProvider>
  //     <StatusBar />
  //     <SafeAreaView style={{ flex: 1 }}>
  //       <Button
  //         disabled={!request}
  //         title="Login"
  //         onPress={() => {
  //           promptAsync();
  //           }}
  //       />

  //       <Button title="GET PROFILE INFO" onPress={fetchProfile}/>
  //       <Zapzap />
  //     </SafeAreaView>
  //   </GlobalContextProvider>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
