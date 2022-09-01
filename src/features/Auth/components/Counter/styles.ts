import {StyleSheet} from 'react-native';
import {convertHeight, convertWidth} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    width: convertWidth(26),
    height: convertHeight(40),
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: convertWidth(4),
  },
  value: {
    fontSize: 21,
    lineHeight: 26,
    color: '#F1F1F1',
  },
});

export default styles;
