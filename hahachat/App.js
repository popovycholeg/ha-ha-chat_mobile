import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './src/containers/Login/Login';
import Register from './src/containers/Register/Register';
import SplashScreen from './src/containers/Splash/Splash';
import Chat from './src/containers/Chat/Chat';
import {store} from './src/redux/index';
global.HOST = "http://ha-ha-chat.com:5200"; //TODO: config or .env

const Auth = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const ChatStack = createStackNavigator({
  //Stack Navigator for Login and Sign up Screen
  Chat: {
    screen: Chat,
    navigationOptions: {
      headerShown: false,
    },
  }
});

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
    navigationOptions: {
      headerShown: false,
    },
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
