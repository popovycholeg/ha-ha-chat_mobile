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
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';

import {styles} from './styles';
import LoginCard from '../../components/LoginCard/LoginCard';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import Loader from '../../components/Loader/Loader';
import {login} from '../../services/authService';
import {setToken} from '../../redux/slices/loginSlice';

const en = require(`../../locale/en.json`);
const ru = require(`../../locale/ru.json`);
const uk = require(`../../locale/uk.json`);

const LoginScreen = (props) => {
  const [userName, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const { t, i18n } = useTranslation();
  const logRegWidth = Math.round(Dimensions.get('window').width) * 0.8 * 0.6;

  const handleEnterPress = () => {
    if (!userName) {
      setErrortext('Please fill Username'); // TODO: translate
      return;
    }
    if (!userPassword) {
      setErrortext('Please fill Password');
      return;
    }
    setErrortext('');
    setLoading(true);

    const dataToSend = {username: userName, password: userPassword};
    login(dataToSend)
      .then((data) => {
        setLoading(false);
        props.setToken(data.auth_token);
        AsyncStorage.setItem('token', data.auth_token);
        props.navigation.navigate('ChatStack');
      })
      .catch((error) => {
        setLoading(false);
        setErrortext('Please check your email id or password');
      });
  };

  const initNewLang = async (lang) => {
    i18n.changeLanguage(lang);
    await AsyncStorage.setItem('lang', lang);
  };

  return (
    <ImageBackground
      source={require('../../images/base.png')}
      style={styles.bgImage}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <Image
            source={{uri: '../../images/logo.png'}} // https://reactjs.org/logo-og.png // TODO
            style={{
              width: '80%',
              height: 100,
              borderWidth: 1,
              borderColor: 'red',
              alignSelf: 'center',
            }}
          />
          <LoginCard>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder={t('Nickname')}
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
                placeholder={t('Password')}
                placeholderTextColor="#000"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <View style={styles.buttonsContainer}>
              <LanguageButton
                text="En"
                size={{height: 55, width: 55}}
                onPress={() => initNewLang('en')}
              />
              <LanguageButton
                text="Ua"
                size={{height: 55, width: 55}}
                onPress={() => initNewLang('uk')}
              />
              <LanguageButton
                text="Ru"
                size={{height: 55, width: 55}}
                onPress={() => initNewLang('ru')}
              />
            </View>
            <View style={styles.logReg}>
              <LanguageButton
                text={t('Enter')}
                size={{height: 35, width: logRegWidth}}
                onPress={() => handleEnterPress()}
              />
            </View>
            <View style={styles.logReg}>
              <LanguageButton
                text={t('Registration')}
                size={{height: 35, width: logRegWidth}}
                onPress={() => props.navigation.navigate('Register')}
              />
            </View>
          </LoginCard>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};
const mapDispatchToProps = {setToken};
const mapStateToProps = (state) => ({loginReducer: state.loginReducer});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
