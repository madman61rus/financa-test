import {StyleSheet} from 'react-native';
import {convertHeight, convertWidth} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    width: convertWidth(328),
    height: convertHeight(82),
    borderWidth: 2,
    borderRadius: convertWidth(16),
    paddingHorizontal: convertWidth(16),
    paddingTop: convertWidth(8),
  },
  input: {
    fontSize: 18,
    marginTop: convertHeight(8),
    width: '100%',
  },
});

export default styles;
