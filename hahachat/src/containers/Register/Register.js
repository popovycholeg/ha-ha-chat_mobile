import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import i18next from 'i18next';

import LoginCard from '../../components/LoginCard/LoginCard';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import LanguagesList from '../..//components/LanguagesList/LanguagesList';
// import Loader from './сomponents/Loader';

const Register = (props) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [RepeatPassword, setRepeatPassword] = useState('');
  const [year, setUserAge] = useState('');
  
  const [loading, setLoading] = useState(false);
  const logRegWidth =  (Math.round(Dimensions.get('window').width) * 0.8) * 0.6;

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
            <View style={[styles.SectionStyle, {marginTop: '10%'}]}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(nickname) => setUserEmail(nickname)}
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
                onChangeText={(userPassword) => setUserPassword(userPassword)}
                placeholder={i18next.t("Password")}
                placeholderTextColor="#000"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userPassword) => setRepeatPassword(userPassword)}
                placeholder={i18next.t("Repeat Password")}
                placeholderTextColor="#000"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.SectionStyle}>
                {/* <LanguagesList /> */}
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                placeholder={i18next.t("Email")}
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
                onChangeText={(year) => setUserAge(year)}
                placeholder={i18next.t("Born (year)")}
                placeholderTextColor="#000"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() =>
                  this._passwordinput && this._passwordinput.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.logReg}>
              <LanguageButton lang={i18next.t("Registration")} size={{height: 35, width: logRegWidth}}/>
            </View>
          </LoginCard>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};
export default Register;

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
    marginBottom: '5%',
    marginLeft: '10%',
    marginRight: '10%',
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
  buttonsContainer: {
    marginTop: '10%',
    marginBottom: '10%',
    flexDirection: 'row',
    height: 45,
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'space-between'
  },
  logReg: {
    marginTop: '15%',
    flexDirection: 'row',
    height: 45,
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'center'
  }
});
