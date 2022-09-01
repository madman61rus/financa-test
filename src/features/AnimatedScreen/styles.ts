import {StyleSheet} from 'react-native';
import {convertHeight} from '../../utils/dimensions';

const styles = StyleSheet.create({
  screen: {flex: 1},
  fullScreen: {flex: 1},
  logo: {flex: 2, alignItems: 'center', justifyContent: 'center'},
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: convertHeight(20),
  },
});

export default styles;
