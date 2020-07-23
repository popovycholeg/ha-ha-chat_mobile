import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import i18next from 'i18next';

import LoginCard from '../../components/LoginCard/LoginCard';
// import Loader from './сomponents/Loader';

const LoginScreen = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitPress = () => {
    props.navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('../../images/base.png')}
      style={styles.bgImage}>
      {/* <Loader loading={loading} /> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <Image
            source={{uri: '../../images/logo.png'}} // https://reactjs.org/logo-og.png // TODO
            style={{width: "80%", height: 100, borderWidth: 1, borderColor: "red", alignSelf: "center"}}
          />
          <LoginCard>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder={i18next.t("Nickname")}
                placeholderTextColor="#000"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() =>
                  this._passwordinput && this._passwordinput.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                placeholder={i18next.t("Password")}
                placeholderTextColor="#000"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
          </LoginCard>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};
export default LoginScreen;


const en = require(`../../locale/en.json`); //TODO: move and switch
const ru = require(`../../locale/ru.json`);
const uk = require(`../../locale/uk.json`);
i18next.init({
  lng: 'uk',
  preload: true,
  resources: uk,
  react: {
    wait: true,
  }
});

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    backgroundColor: '#bfd2d7',
    color: '#000',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#000',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    textAlign: 'center',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {},
});