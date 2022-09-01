import {StyleSheet} from 'react-native';
import {convertHeight, convertWidth} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: convertHeight(98),
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: convertHeight(8),
  },
  titleContainer: {
    flex: 5,
    height: convertHeight(88),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: convertHeight(18),
  },
  rightSide: {
    flex: 1,
  },
  leftSide: {
    flex: 1,
    paddingLeft: convertWidth(16),
  },
  title: {
    fontSize: 21,
    lineHeight: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default styles;
