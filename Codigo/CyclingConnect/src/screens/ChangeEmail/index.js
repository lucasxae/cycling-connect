import React, {useCallback} from 'react';
import {View, Keyboard} from 'react-native';
import axios from 'axios';
import {CustomInput} from '../../components';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {resetEmailSchema} from '../../utils/schemas/schemas';
import * as S from './styles';
import {useRoute} from '@react-navigation/native';
import {useAuth} from '../../context/AuthContext';

function ChangeEmail({navigation}) {
  const {onUpdateEmail} = useAuth();
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
      email: '',
    },
    resolver: zodResolver(resetEmailSchema),
  });

  const onSubmit = useCallback(async data => {
    try {
      const newData = {
        email: data.email,
      };

      const response = await axios.put(
        `http://10.0.2.2:8080/api/users/updateEmail/${params.email}`,
        newData,
      );
      if (response.status === 200) {
        await onUpdateEmail(newData.email);
        navigation.navigate('Home');
      }
    } catch (err) {
      console.log(err);
      setError('root', [
        {
          type: 'manual',
          message: 'Houve um erro ao alterar a senha.',
        },
      ]);
    }
  }, []);

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <View>
            <S.Header>
              <S.Title>Alterar e-mail</S.Title>
            </S.Header>
            <Controller
              name="email"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Email"
                  placeholder="Digite o seu novo e-mail"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  autoComplete="email"
                  keyboardType={'email-address'}
                />
              )}
            />
            {errors.email && <S.Error>{errors.email.message}</S.Error>}
          </View>
          <View>
            <S.CustomButton
              fullWidth={true}
              onPress={handleSubmit(onSubmit)}
              bgColor={'#fff'}
              disabled={!isValid || isSubmitting}>
              <S.ButtonText>Alterar e-mail</S.ButtonText>
            </S.CustomButton>
          </View>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default ChangeEmail;
