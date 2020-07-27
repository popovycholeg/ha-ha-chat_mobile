import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
