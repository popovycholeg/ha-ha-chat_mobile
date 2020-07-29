import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import i18next from 'i18next';
import { initReactI18next } from "react-i18next";

const en = require(`../../locale/en.json`);
const ru = require(`../../locale/ru.json`);
const uk = require(`../../locale/uk.json`);

const SplashScreen = props => {

  useEffect(() => {
    (async function inititilize() {
      const lang = await AsyncStorage.getItem('lang');
      i18next
      .use(initReactI18next)
      .init({
        lng: lang,
        preload: true,
        resources: {
          ...en,
          ...uk,
          ...ru
        },
        react: {
          wait: true,
        }
      });
  
      setTimeout(() => {
        //Check if token is set or not
        //If not then send for Authentication
        //else send to Home Screen
        AsyncStorage.getItem('token').then(value =>
          props.navigation.navigate(
            value === null ? 'Auth' : 'ChatStack'
          )
        );
      }, 2000);
    })();
  }, []);

  return (
    <ImageBackground
      source={require('../../images/base.png')}
      style={styles.bgImage}>
      <Image
        source={require('../../images/logo.png')}
        style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
      />
      <ActivityIndicator
        animating={true}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </ImageBackground>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});