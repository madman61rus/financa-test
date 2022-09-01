import React, {useCallback, useState} from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {LoginScreenProps} from '../../../../types/navigation/authStack';
import TitleWithBack from '../../../../components/titles/TitleWithBack';
import Input from '../../../../components/inputs/Input';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import RoundedButton, {
  ButtonStyle,
} from '../../../../components/buttons/RoundedButton';
import ScreenRoutes from '../../../../navigation/routes';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().required().min(3).email(),
  password: yup.string().required().min(6),
});

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setLoading]);

  const handleBackPress = useCallback(() => {
    navigation.navigate(ScreenRoutes.SPLASH_SCREEN, {
      screen: ScreenRoutes.AUTH_STACK,
      params: {screen: ScreenRoutes.AUTH_SCREEN},
    });
  }, [navigation]);

  return (
    <LinearGradient colors={['#11BDFD', '#0A83F8']} style={styles.screen}>
      <TitleWithBack onBackPress={handleBackPress} title="Login" />
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, value}}) => (
          <Input
            style={styles.input}
            label="Email"
            value={value}
            onTextChange={onChange}
            hasError={errors.hasOwnProperty('email')}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value}}) => (
          <Input
            style={styles.input}
            label="Password"
            value={value}
            onTextChange={onChange}
            hasError={errors.hasOwnProperty('password')}
          />
        )}
      />
      <RoundedButton
        loading={loading}
        style={styles.button}
        type={ButtonStyle.FILLED_GREEN}
        title="Login"
        onPress={handleSubmit(onSubmit)}
      />
    </LinearGradient>
  );
};

export default LoginScreen;
