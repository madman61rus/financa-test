import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenRoutes from '../../navigation/routes';

export type RootStackParamList = {
  [ScreenRoutes.SPLASH_SCREEN]: {
    screen?: ScreenRoutes.AUTH_STACK;
    params?: {
      screen: ScreenRoutes.LOGIN_SCREEN | ScreenRoutes.AUTH_SCREEN;
    };
  };
  [ScreenRoutes.AUTH_STACK]: {
    screen?: ScreenRoutes;
    params?: {
      screen: ScreenRoutes.LOGIN_SCREEN | ScreenRoutes.AUTH_SCREEN;
    };
  };
};

export type AnimatedScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.SPLASH_SCREEN
>;
