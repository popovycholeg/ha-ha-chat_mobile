import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import {BoxShadow} from 'react-native-shadow';

export default function LanguageButton({lang}) {
  const [pressed, setPressed] = useState(false);
  
  const shadowOpt = {
    // For Android shadow
    width: 55,
    height: 55,
    color: '#000',
    border: 2,
    radius: 10,
    opacity: 0.7,
    x: 2,
    y: 2,
    style: {
      alignSelf: 'center',
    },
  };

  return (
    <TouchableHighlight
      onHideUnderlay={() => setPressed(false)}
      onShowUnderlay={() => setPressed(true)}
    >
      {pressed ? 
        <View style={styles.pressedButton}>
          <Text style={styles.text}>{lang}</Text>
        </View>
        :
        <BoxShadow setting={shadowOpt}>
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>{lang}</Text>
          </View>
        </BoxShadow>
      }
      
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 55,
    height: 55,
    backgroundColor: '#004941',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedButton: {
    width: 55,
    height: 55,
    backgroundColor: '#004941',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffc300'
  },
  text: {
    color: '#ffc300',
  },
});
