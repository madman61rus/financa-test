import {StyleSheet} from 'react-native';
import {convertWidth, convertHeight} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    width: convertWidth(120),
    height: convertHeight(2),
    backgroundColor: 'rgba(255,255,255, 0.2)',
  },
  indicator: {
    height: convertHeight(2),
    backgroundColor: '#FFF',
  },
});

export default styles;