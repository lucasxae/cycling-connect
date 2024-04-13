import React from 'react';
import {View, Keyboard} from 'react-native';
import {CustomInput} from '../../../components';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {resetPasswordSchema} from '../../../utils/schemas/schemas';
import * as S from './styles';

function NewPassword() {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    mode: 'all',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = data => console.log(data);

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <View>
            <S.Header>
              <S.Title>Redefinir senha</S.Title>
              <S.Subtitle>
                Pronto! Agora é só escolher a nova senha para voltar a curtir o
                Cycling Connect.
              </S.Subtitle>
            </S.Header>
            <Controller
              name="password"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Nova senha"
                  placeholder="Nova senha"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  isPassword
                  password
                  value={value}
                  minLength={8}
                  maxLength={16}
                />
              )}
            />
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
            <Controller
              name="confirmPassword"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Confirmar senha"
                  placeholder="Confirmar senha"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  isPassword
                  password
                  hasMargin
                  value={value}
                  minLength={8}
                  maxLength={16}
                />
              )}
            />
            {errors.confirmPassword && (
              <S.Error>{errors.confirmPassword.message}</S.Error>
            )}
          </View>
          <View>
            <S.CustomButton
              fullWidth={true}
              onPress={handleSubmit(onSubmit)}
              bgColor={'#fff'}
              disabled={!isValid || isSubmitting}>
              <S.ButtonText>Continuar</S.ButtonText>
            </S.CustomButton>
          </View>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default NewPassword;
