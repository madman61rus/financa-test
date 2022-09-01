import {AuthStackParamList} from './authStack';
import {RootStackParamList} from './rootStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, RootStackParamList {}
  }
}
