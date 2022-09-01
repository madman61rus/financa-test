import {StyleSheet} from 'react-native';
import {convertWidth} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    width: convertWidth(44),
    height: convertWidth(44),
    backgroundColor: '#F1F1F1',
    borderRadius: convertWidth(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
