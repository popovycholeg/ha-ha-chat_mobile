import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: '10%',
    marginRight: '10%',
    margin: 10,
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
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  }
});
