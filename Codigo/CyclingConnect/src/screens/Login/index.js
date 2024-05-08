import React, {useCallback} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginSchema} from '../../utils/schemas/schemas';
import {
  Button,
  CustomText,
  CustomInput,
  Separator,
  Link,
} from '../../components';
import {View, Keyboard} from 'react-native';
import * as S from './styles';
import useKeyboardListener from '../../hooks/useKeyboardListener';
import {useAuth} from '../../context/AuthContext';
import Toast from 'react-native-toast-message';
import GoogleIcon from '../../assets/icons/google.svg';
import Logo from '../../components/Logo';
import theme from '../../global/theme';

function Login({navigation}) {
  const keyboardOpen = useKeyboardListener();
  const {onLogin} = useAuth();
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback(async data => {
    try {
      const response = await onLogin(data);
      return response;
    } catch (err) {
      setError('root', {
        type: 'manual',
        message: 'Ops! Ocorreu um erro ao tentar fazer login.',
      });
    }
  }, []);

  const googleSubmit = data => {
    // implementar futura autenticação com o Google API
    console.log('Google => ', data);
  };

  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Ops! Ocorreu um erro ao fazer login',
      text2: 'Tente novamente mais tarde.',
    });
  };

  return (
    <S.SafeAreaView keyboardVisible={keyboardOpen}>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <S.Content>
            <View>
              <S.Header>
                <S.Title>
                  Faça Login no
                  <Logo />
                </S.Title>
              </S.Header>
              <Controller
                name="email"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomInput
                    label="E-mail"
                    placeholder="Digite seu e-mail"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.email && <S.Error>{errors.email.message}</S.Error>}
              <Controller
                name="password"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomInput
                    label="Senha"
                    placeholder="Digite sua senha"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    isPassword={true}
                    password
                    hasMargin
                  />
                )}
              />
              <Link
                onPress={() => navigation.navigate('EmailVerification')}
                linkText={'Esqueceu a senha?'}
                align={'right'}
                justifyContent={'flex-end'}
                color={'#363636'}
                size={'14px'}
              />
              {errors.root && <S.Error>{errors.root.message}</S.Error>}
              <Button
                hasMargin
                mt={30}
                fullWidth
                onPress={handleSubmit(onSubmit)}
                disabled={!isValid || isSubmitting}>
                <CustomText bold color={'#fff'}>
                  Entrar
                </CustomText>
              </Button>

              {/* <Separator mv={20} text={'ou'} />
              <Button
                fullWidth={true}
                onPress={handleSubmit(googleSubmit)}
                bgColor={'#F3F3F3'}
                customIcon={
                  <GoogleIcon width={24} height={24} marginRight={10} />
                }>
                <CustomText bold color={'#363636'}>
                  Continuar com o Google
                </CustomText>
              </Button> */}
            </View>
            <Link
              onPress={() => navigation.navigate('FirstStep')}
              regularText={`Não tem uma conta?`}
              color={theme.colors.redPalette.primary}
              linkText={'Cadastre-se'}
              align={'center'}
              mt={30}
              bold
            />
          </S.Content>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default Login;
