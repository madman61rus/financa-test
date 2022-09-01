import {StyleSheet} from 'react-native';
import {convertHeight, convertWidth} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    width: convertWidth(328),
    height: convertHeight(56),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: convertWidth(8),
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 5,
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  shevronContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: convertWidth(16),
  },
  title: {
    color: '#FFF',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFF',
    fontSize: 10,
    lineHeight: 10,
    marginTop: convertHeight(3),
  },
});

export default styles;
