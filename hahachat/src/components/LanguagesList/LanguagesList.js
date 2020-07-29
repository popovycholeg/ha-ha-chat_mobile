import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Picker} from '@react-native-community/picker';
import {View} from 'native-base';

const LanguagesList = ({languages, language, onChange}) => {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        borderRightWidth: 0,
        borderBottomWidth: 0,
        alignItems: 'center',
        overflow: 'hidden',
      }}>
      <Picker
        selectedValue={language}
        style={styles.input}
        // mode="dropdown"
        onValueChange={(itemValue, itemIndex) => onChange(itemValue)}>
        {languages.map((language) => (
          <Picker.Item
            label={language.name_en}
            value={language.id}
            key={language.id}
          />
        ))}
      </Picker>
    </View>
  );
};

LanguagesList.propTypes = {
  languages: PropTypes.array,
  language: PropTypes.number,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 44,
    marginBottom: 10,
    color: '#000',
    backgroundColor: '#bfd2d7',
    textAlign: 'center',
  },
});

export default LanguagesList;
