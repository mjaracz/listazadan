import {Dimensions, StyleSheet} from 'react-native';

let {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
    width: width,
    marginTop: 40
  },
  list__item: {
    padding: 10,
    fontSize: 18,
    paddingLeft: 16,
    width: width,
  },
  item__bold: {
    fontWeight: "600"
  },
  item__email: {
    marginBottom: 20
  },
  list__section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 14,
    backgroundColor: '#0f91ff',
    borderRadius: 120,
    width: width - 24,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 10
  },
  section__text: {
    color: '#f0edf6',
    paddingBottom: 4,
    paddingTop: 4,
  }
});

export default styles;
