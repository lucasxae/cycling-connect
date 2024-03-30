import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {View, TextInput} from 'react-native';
import {loginSchema} from '../../utils/schemas/schemas';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '../../components/Button/styles';
import Text from '../../components/Text';

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
        <Text>Entrar</Text>
      </Button>
      <Button onPress={handleSubmit(onSubmit)} backgroundColor={'#fff'}>
        <Text>Continuar com o Google</Text>
      </Button>
      {errors.root && <Text>{errors.root.message}</Text>}
    </View>
  );
}

export default Login;
