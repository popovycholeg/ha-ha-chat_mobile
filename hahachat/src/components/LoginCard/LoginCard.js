import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';

import {BoxShadow} from 'react-native-shadow';

export default function LoginCard({children}) {
  const cardWidth = Math.round(Dimensions.get('window').width) * 0.8; // BoxShadow does`t support %
  const cardHeight = Math.round(Dimensions.get('window').height) * 0.6;
  const marginTop = Math.round(Dimensions.get('window').height) * 0.2 - 100;

  const shadowOpt = {
    // For Android shadow
    width: cardWidth,
    height: cardHeight,
    color: '#000',
    border: 2,
    radius: 10,
    opacity: 0.7,
    x: 4,
    y: 4,
    style: {
      marginVertical: marginTop,
      alignSelf: 'center',
    },
  };

  return (
    <BoxShadow setting={shadowOpt}>
      <View
        style={{
          position: 'relative',
          width: cardWidth,
          height: cardHeight,
          backgroundColor: '#216563',
          borderRadius: 10,
          // marginVertical:5,
          overflow: 'hidden',
        }}>
        {children}
      </View>
    </BoxShadow>
  );
}

// const styles = StyleSheet.create({
//   loginCard: {
//     shadowColor: '#000', // only IOS
//     shadowOffset: {
//       width: 2,
//       height: 2,
//     },
//     shadowOpacity: 1,
//     shadowRadius: 1,

//     elevation: 24,
//   },
// });
