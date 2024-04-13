import React, {useCallback} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  Button,
  CustomText,
  CustomInput,
  Separator,
  Link,
} from '../../../components';
import {View, Text, Keyboard} from 'react-native';
import * as S from './styles';

function EmailVerification({navigation}) {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(
      z.object({
        email: z.string().email({message: 'Insira um e-mail válido.'}),
      }),
    ),
  });

  const onSubmit = useCallback(data => {
    try {
      // implementar validação se o e-mail existe, se existe, enviar o código de 4 dígitos
      console.log(data);
      if (data) {
        navigation.navigate('CodeVerification', {data});
      }
    } catch (err) {
      setError('email', {
        type: 'manual',
        message: 'E-mail não encontrado.',
      });
    }
  }, []);

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <View>
            <S.Header>
              <S.Title>Recuperar senha</S.Title>
              <S.Subtitle>
                Para sua segurança, enviaremos um código de 4 dígitos no seu
                e-mail para validar a redefinição da senha.
              </S.Subtitle>
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
          </View>
          <S.CustomButton
            fullWidth={true}
            onPress={handleSubmit(onSubmit)}
            bgColor={'#fff'}
            disabled={!isValid || isSubmitting}>
            <S.ButtonText>Continuar</S.ButtonText>
          </S.CustomButton>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default EmailVerification;
