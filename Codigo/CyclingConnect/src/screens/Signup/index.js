import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpSchema} from '../../utils/schemas/schemas';
import {
  Button,
  CustomText,
  CustomInput,
  Separator,
  Link,
} from '../../components';
import * as S from './styles';

function Signup() {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async data => {
    try {
      // implementar a chamada /auth/signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Cadastro => ', data);
    } catch (error) {
      setError('root', {
        type: 'manual',
        message:
          'Ops! Ocorreu um erro ao tentar fazer o seu cadastro, tente novamente mais tarde.',
      });
    }
  };

  return (
    <S.KeyboardWrapper>
      <S.SafeAreaView>
        <S.Container>
          <S.Content>
            <S.TitleContainer>
              <CustomText bold size={24} hasMargin align="left">
                Dê a largada
              </CustomText>
              <CustomText size={16} hasMargin align="left">
                Comece agora a sua jornada no Cycling Connect.
              </CustomText>
            </S.TitleContainer>
            <Controller
              name="name"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Nome"
                  placeholder="Nome completo"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Email"
                  placeholder="Digite o seu e-mail"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasMargin
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Celular"
                  placeholder="(XX) X XXXX-XXXX"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasMargin
                />
              )}
            />
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
                  hasMargin
                />
              )}
            />
            <Button
              hasMargin
              mt={30}
              fullWidth
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid || isSubmitting}>
              <CustomText bold color={'#fff'}>
                Cadastrar
              </CustomText>
            </Button>
          </S.Content>
        </S.Container>
      </S.SafeAreaView>
    </S.KeyboardWrapper>
  );
}

export default Signup;
