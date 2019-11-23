import {Dimensions, StyleSheet} from 'react-native';

let {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  home: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height
  },
  home__title: {
    fontSize: 18,
    padding: 18,
    letterSpacing: 1,
    color: '#363636',
    width: width,
    textAlign: 'center'
  },
  home__text: {
    fontSize: 12,
    paddingBottom: 6,
    letterSpacing: 1
  }
});

export default style;
