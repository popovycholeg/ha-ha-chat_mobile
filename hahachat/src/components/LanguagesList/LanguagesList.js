import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

export default LanguagesList = (props) => {
  return (
    <Picker
      selectedValue="Test" // selectedValue={props.selectedLanguage}
      style={styles.input}
      onValueChange={() => console.log("dasd")} // onValueChange={props.onChange}
    >
      <Picker.Item key={i} color='grey' value={"Test"} label={"Select"} />
      <Picker.Item key={i} color='grey' value={"Test1"} label={"Select"} />
      {/* {props.servers.map((s, i) => {
        return <Picker.Item key={i} color='grey' value={s.ServerId} label={"Select"} />
      })} */}
    </Picker>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#808080",
    marginBottom: 10,
    color: '#ffffff'
  }
});