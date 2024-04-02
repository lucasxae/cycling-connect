import React, {useEffect, useCallback} from 'react';
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
import {api} from '../../services/api';

function Signup() {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
      phone: '',
      gender: '',
      birthdate: '',
      email: '',
      cpf: '',
    },
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = useCallback(async data => {
    try {
      const formData = data;
      formData.role = 'admin';
      console.log('formData', formData);

      const response = await api.post(
        '/auth/register',
        {formData},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      return response;
    } catch (err) {
      console.log('Error => ', err.response.data);
      setError('root', {
        type: 'manual',
        message:
          'Ops! Ocorreu um erro ao tentar fazer login, tente novamente mais tarde.',
      });
    }
  }, []);

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
              name="cpf"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="CPF"
                  placeholder="Insira seu CPF"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.cpf && <S.Error>{errors.cpf.message}</S.Error>}
            <Controller
              name="login"
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
            {errors.name && <S.Error>{errors.name.message}</S.Error>}
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
            {errors.email && <S.Error>{errors.email.message}</S.Error>}
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
            {errors.phone && <S.Error>{errors.phone.message}</S.Error>}
            <Controller
              name="birthDate"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Data de nascimento"
                  placeholder="DD/MM/YYYY"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasMargin
                />
              )}
            />
            {errors.birthDate && <S.Error>{errors.birthDate.message}</S.Error>}
            <Controller
              name="gender"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Gênero"
                  placeholder="M ou F"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasMargin
                />
              )}
            />
            {errors.gender && <S.Error>{errors.gender.message}</S.Error>}
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
                  secureTextEntry
                  password
                />
              )}
            />
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
            <Button
              hasMargin
              mt={30}
              fullWidth
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}>
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
