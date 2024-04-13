import React, {useCallback} from 'react';
import {View, Keyboard} from 'react-native';
import {Link} from '../../../components';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useRoute} from '@react-navigation/native';
import * as S from './styles';
import {OTPInput} from '../../../components';

function CodeVerification({navigation}) {
  const route = useRoute();
  const {params} = route;

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

  const onSubmit = useCallback(data => {
    try {
      //implementar validação se o código é válido
      const data2 = {
        code: data.code,
        ...params.data,
      };
      console.log(data2);
      if (data.code === '1234') {
        navigation.navigate('NewPassword');
      }
    } catch (err) {
      setError('code', {
        type: 'manual',
        message: 'O código inserido é inválido.',
      });
    }
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
              onPress={() => console.log('Reenviar código')}
              regularText={'Não recebeu o código?'}
              linkText={'Reenviar'}
              mt={20}
            />
          </View>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default CodeVerification;
