import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenRoutes from '../../navigation/routes';

type RootStackParamList = {
  [ScreenRoutes.AUTH_SCREEN]: undefined;
};

export type AuthScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.AUTH_SCREEN
>;
