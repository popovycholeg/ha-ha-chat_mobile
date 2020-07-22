import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import i18next from 'i18next';

export default class Login extends Component {

  render() {
    return (
      <View style={[styles.container]}>
        <Text>Register</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
