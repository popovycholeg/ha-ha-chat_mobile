import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './src/containers/Login/Login';
import Register from './src/containers/Register/Register';
import SplashScreen from './src/containers/Splash/Splash';

const Stack = createStackNavigator();
global.HOST = "http://ha-ha-chat.com:5200";

const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = createSwitchNavigator({ 
  SplashScreen: {
    /* SplashScreen which will come once for 5 Seconds */
    screen: SplashScreen,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  },
  Auth: {
    /* Auth Navigator which includer Login Signup will come once */
    screen: Auth,
  }
});

export default createAppContainer(App);
