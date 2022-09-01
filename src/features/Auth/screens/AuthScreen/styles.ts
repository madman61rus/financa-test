import {StyleSheet} from 'react-native';
import {convertHeight} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center'},
  logoContainer: {marginTop: convertHeight(64)},
  authImage: {marginTop: convertHeight(12)},
  title: {
    color: '#F1F1F1',
    marginTop: convertHeight(28),
    fontSize: 21,
    lineHeight: 26,
  },
  subTitle: {
    color: '#A1EEFF',
    marginTop: convertHeight(5),
    fontSize: 10,
    lineHeight: 10,
  },
  counterContainer: {
    marginTop: convertHeight(14),
  },
  createButton: {
    marginTop: convertHeight(28),
  },
  loginButton: {
    marginTop: convertHeight(31),
  },
});

export default styles;
