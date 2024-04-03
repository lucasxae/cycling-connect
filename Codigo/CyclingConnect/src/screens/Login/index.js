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
import {View} from 'react-native';
import * as S from './styles';
import useKeyboardListener from '../../hooks/useKeyboardListener';
import CyclingConnect from '../../assets/images/cc-logo2.svg';
import {useAuth} from '../../context/AuthContext';
import Toast from 'react-native-toast-message';

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
    } catch (error) {
      showToast();
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
    <S.KeyboardWrapper>
      <S.SafeAreaView keyboardVisible={keyboardOpen}>
        <S.Container>
          <S.Background>
            {!keyboardOpen && (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <CyclingConnect width={150} height={150} />
              </View>
            )}
            <S.Content keyboardVisible={keyboardOpen}>
              <S.TitleContainer>
                <CustomText bold size={24} hasMargin align={'left'}>
                  Faça login
                </CustomText>
              </S.TitleContainer>
              <Controller
                name="email"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomInput
                    label="Email"
                    placeholder="Email"
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
                    placeholder="Senha"
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
                onPress={() => console.log('Esqueceu a senha?')}
                linkText={'Esqueceu a senha?'}
                align={'right'}
                justifyContent={'flex-end'}
              />
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

              <Separator mv={20} text={'ou'} />
              <Button
                fullWidth={true}
                onPress={handleSubmit(googleSubmit)}
                bgColor={'#fff'}>
                <CustomText bold>Entrar com o Google</CustomText>
              </Button>

              <Link
                onPress={() => navigation.navigate('Signup')}
                regularText={`Não tem uma conta?`}
                color={'#CD2B15'}
                linkText={'Cadastre-se'}
                align={'center'}
                mt={30}
              />
            </S.Content>
          </S.Background>
        </S.Container>
      </S.SafeAreaView>
    </S.KeyboardWrapper>
  );
}

export default Login;
