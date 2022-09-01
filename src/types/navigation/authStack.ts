import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenRoutes from '../../navigation/routes';

export type AuthStackParamList = {
  [ScreenRoutes.AUTH_SCREEN]: undefined;
  [ScreenRoutes.LOGIN_SCREEN]: undefined;
  [ScreenRoutes.SPLASH_SCREEN]: {
    screen?: ScreenRoutes;
    params?: {
      screen: ScreenRoutes.LOGIN_SCREEN | ScreenRoutes.AUTH_SCREEN;
    };
  };
};

export type AuthScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  ScreenRoutes.AUTH_SCREEN
>;

export type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  ScreenRoutes.LOGIN_SCREEN
>;
