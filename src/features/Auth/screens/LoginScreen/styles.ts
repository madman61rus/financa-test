import {StyleSheet} from 'react-native';
import {convertHeight} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  screen: {flex: 1, alignItems: 'center'},
  input: {
    marginTop: convertHeight(32),
  },
  button: {
    marginTop: convertHeight(64),
  },
});

export default styles;
