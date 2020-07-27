import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './src/containers/Login/Login';
import Register from './src/containers/Register/Register';
import SplashScreen from './src/containers/Splash/Splash';
import Chat from './src/containers/Chat/Chat';
import {store} from './src/redux/index';

const Stack = createStackNavigator();
global.HOST = "http://ha-ha-chat.com:5200"; //TODO: config or .env

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

const ChatStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const SwitchNavigator = createSwitchNavigator({ 
  SplashScreen: {
    /* SplashScreen which will come once for n Seconds */
    screen: SplashScreen,
    navigationOptions: {
      /* Hiding header for Splash Screen */
      headerShown: false,
    },
  },
  Auth: {
    /* Auth Navigator which includer Login Register will come once */
    screen: Auth,
  },
  ChatStack: {
    screen: ChatStack,
  }
});

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}><AppContainer /></Provider>
    );
  }
}
