import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const LoginCard = (props) => {
  return (
    // TODO: 2 View one on another
    <View style={{marginTop: 100}}> 
      <View style={styles.loginCard}>
        {props.children}
      </View>
    </View>
  );
};
export default LoginCard;

const styles = StyleSheet.create({
  loginCard: {
    width: '80%',
    height: 500, // TODO
    backgroundColor: '#216563',
    borderWidth: 8,
    borderRadius: 4,
    borderColor: '#0f2020',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    alignSelf: 'center',

    // shadowColor: "#000",
    // shadowOffset: {
    // width: 1,
    // height: 6,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 1,

    // elevation: 24,
  }
});
