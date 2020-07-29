import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ImageBackground,
  Dimensions,
  Text
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useAxiosRequest} from 'use-axios-request';
import i18next from 'i18next';

import {styles} from './styles';
import LoginCard from '../../components/LoginCard/LoginCard';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import LanguagesList from '../..//components/LanguagesList/LanguagesList';
import {getLanguages, register} from '../../services/authService';
import Loader from '../../components/Loader/Loader';

const Register = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [repeatedPassword, setRepeatPassword] = useState('');
  const [language, setLanguage] = useState(1);
  const [year, setUserAge] = useState('');

  const {data: languages = []} = useAxiosRequest(
    `${global.HOST}/api/languages/`,
  );
  const {data, error, update: register} = useAxiosRequest();


  const [loading, setLoading] = useState(false);
  const logRegWidth = Math.round(Dimensions.get('window').width) * 0.8 * 0.6;

  const handleRegisterClick = () => {
    register({
      url: `${global.HOST}/api/account/register/`,
      method: 'POST',
      data: JSON.stringify({
        username: userName,
        password: userPassword,
        password2: repeatedPassword,
        language: language,
        email: userEmail,
        born: year
      })
    });
    console.log(error);
  };

  return (
    <ImageBackground
      source={require('../../images/base.png')}
      style={styles.bgImage}>
      {/* <Loader loading={isFetching} /> */}
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
            <View style={[styles.SectionStyle, {marginTop: '10%'}]}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(nickname) => setUserName(nickname)}
                placeholder={i18next.t('Nickname')}
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
                placeholder={i18next.t('Password')}
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
                placeholder={i18next.t('Repeat Password')}
                placeholderTextColor="#000"
                keyboardType="default"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.SectionStyle}>
              <LanguagesList
                languages={languages}
                language={language}
                onChange={setLanguage}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userEmail) => setUserEmail(userEmail)}
                placeholder={i18next.t('Email')}
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
                placeholder={i18next.t('Born (year)')}
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
              <LanguageButton
                text={i18next.t('Registration')}
                size={{height: 35, width: logRegWidth}}
                onPress={handleRegisterClick}
              />
            </View>
          </LoginCard>
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register;
