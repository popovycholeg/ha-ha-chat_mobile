import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';
import {BoxShadow} from 'react-native-shadow';

import {styles} from './styles';

const LanguageButton = ({text, size, onPress}) => {
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
          <Text style={styles.text}>{text}</Text>
        </View>
        :
        <BoxShadow setting={shadowOpt}>
          <View style={[styles.buttonContainer, {width: size.width, height: size.height}]}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </BoxShadow>
      }
    </TouchableHighlight>
  );
}

LanguageButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.object,
  onPress: PropTypes.func
};

export default LanguageButton;