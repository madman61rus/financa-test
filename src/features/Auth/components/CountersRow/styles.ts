import {StyleSheet} from 'react-native';
import {convertHeight, convertWidth} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: convertHeight(14),
  },
  block: {
    flexDirection: 'row',
    marginRight: convertWidth(8),
    width: convertWidth(82),
    justifyContent: 'space-between',
  },
});

export default styles;
