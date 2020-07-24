import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';

import {BoxShadow} from 'react-native-shadow';

export default function LanguageButton({lang, size, onPress}) {
  const [pressed, setPressed] = useState(false);
  
  const shadowOpt = {
    // For Android shadow
    width: size.width,
    height: size.height,
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
      underlayColor={"#216563"}
      onPress={onPress}
    >
      {pressed ? 
        <View style={[styles.pressedButton, {width: size.width - 1, height: size.height - 1}]}>
          <Text style={styles.text}>{lang}</Text>
        </View>
        :
        <BoxShadow setting={shadowOpt}>
          <View style={[styles.buttonContainer, {width: size.width, height: size.height}]}>
            <Text style={styles.text}>{lang}</Text>
          </View>
        </BoxShadow>
      }
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#004941',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedButton: {
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
