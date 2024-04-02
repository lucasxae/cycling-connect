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
import {useAuth} from '../../../context/AuthContext';

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
      const response = await onLogin(data.email, data.password);
      if (response.status === 200) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('Erro', error);
      setError('root', {
        type: 'manual',
        message:
          'Ops! Ocorreu um erro ao tentar fazer login, tente novamente mais tarde.',
      });
    }
  }, []);

  const googleSubmit = data => {
    console.log('Google => ', data);
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
                    secureTextEntry
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
              {errors.root && <S.Error>{errors.root.message}</S.Error>}
              <Link
                onPress={() => navigation.navigate('Signup')}
                regularText={`Não tem uma conta?`}
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
