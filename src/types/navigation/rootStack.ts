import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import ScreenRoutes from '../../navigation/routes';

type RootStackParamList = {
  [ScreenRoutes.ANIMATION_SCREEN]: undefined;
  [ScreenRoutes.AUTH_STACK]: {
    screen: ScreenRoutes.AUTH_SCREEN;
  };
};

export type AnimatedScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoutes.ANIMATION_SCREEN
>;
