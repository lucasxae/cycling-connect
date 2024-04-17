import React, {useCallback, useState, useEffect} from 'react';
import {View, Keyboard} from 'react-native';
import {Link} from '../../../components';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';
import * as S from './styles';
import {OTPInput} from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CodeVerification({navigation}) {
  const route = useRoute();
  const {params} = route;
  const [counter, setCounter] = useState(0);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      code: '',
    },
    resolver: zodResolver(
      z.object({
        code: z.string().length(4, {message: 'Código inválido.'}),
      }),
    ),
  });

  const onSubmit = useCallback(async data => {
    try {
      const newData = {
        ...params.data,
        code: data.code,
      };

      const response = await axios.post(
        'http://10.0.2.2:8080/api/management/validate-code',
        newData,
      );
      if (response.status === 200) {
        navigation.navigate('NewPassword', newData);
      }
    } catch (err) {
      setError('code', {
        type: 'manual',
        message: 'O código inserido é inválido.',
      });
    }
  }, []);

  console.log(counter);

  const resendCode = async () => {
    setCounter(20);
    await axios.post(
      'http://10.0.2.2:8080/api/management/get-code',
      params.data,
    );
  };

  useEffect(() => {
    const saveCounter = async () => {
      await AsyncStorage.setItem('counter', counter.toString());
    };

    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      saveCounter();
      return () => clearTimeout(timer);
    }
  }, [counter]);

  useEffect(() => {
    const loadCounter = async () => {
      try {
        const savedCounter = await AsyncStorage.getItem('counter');
        if (savedCounter) {
          setCounter(parseInt(savedCounter));
        }
      } catch (error) {
        console.log('Error loading counter:', error);
      }
    };

    loadCounter();
  }, []);

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <View>
            <S.Header>
              <S.Title>Verificação</S.Title>
              <S.Subtitle>
                Nós enviamos um código de 4 dígitos para o email{' '}
                {params.data.email}.
              </S.Subtitle>
            </S.Header>
            <Controller
              name="code"
              control={control}
              render={({field: {onChange, value}}) => (
                <OTPInput label={'Insira o código'} onTextChange={onChange} />
              )}
            />
            {errors.code && <S.Error>{errors.code.message}</S.Error>}
          </View>
          <View>
            <S.CustomButton
              fullWidth={true}
              onPress={handleSubmit(onSubmit)}
              bgColor={'#fff'}
              disabled={!isValid || isSubmitting}>
              <S.ButtonText>Continuar</S.ButtonText>
            </S.CustomButton>
            <Link
              onPress={resendCode}
              regularText={'Não recebeu o código?'}
              linkText={
                counter === 0 ? 'Reenviar' : `Reenviar em ${counter} segundos.`
              }
              mt={15}
              disabled={counter > 0}
              column
            />
          </View>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default CodeVerification;
