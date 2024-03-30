import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {View, TextInput, Text} from 'react-native';
import {loginSchema} from '../../utils/schemas/schemas';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '../../components/Button/styles';
import CustomText from '../../components/CustomText';
import * as S from './styles';

function Login() {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async data => {
    try {
      // implementar a chamada /auth/login
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login => ', data);
    } catch (error) {
      setError('root', {
        type: 'manual',
        message:
          'Ops! Ocorreu um erro ao tentar fazer login, tente novamente mais tarde.',
      });
    }
  };

  const googleSubmit = data => {
    console.log('Google => ', data);
  };

  return (
    <S.SafeAreaView>
      <View>
        <Controller
          name="email"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <Text>E-mail</Text>
              <TextInput
                placeholder="E-mail"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
        />
        {errors.email && <Text>{errors.email.message}</Text>}
        <Controller
          name="password"
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <>
              <Text>Senha</Text>
              <TextInput
                placeholder="Senha"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </>
          )}
        />
        {errors.password && <Text>{errors.password.message}</Text>}
        <Button onPress={handleSubmit(onSubmit)}>
          <CustomText>Entrar</CustomText>
        </Button>
        <Button onPress={handleSubmit(onSubmit)} backgroundColor={'#fff'}>
          <CustomText>Entrar com o Google</CustomText>
        </Button>
        {errors.root && <Text>{errors.root.message}</Text>}
      </View>
    </S.SafeAreaView>
  );
}

export default Login;
