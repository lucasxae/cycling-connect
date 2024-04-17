import React, {useCallback} from 'react';
import {View, Keyboard} from 'react-native';
import axios from 'axios';
import {CustomInput} from '../../components';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {resetPasswordSchema} from '../../utils/schemas/schemas';
import * as S from './styles';
import {useRoute} from '@react-navigation/native';

function ChangePassword({navigation}) {
  const route = useRoute();
  const {params} = route;

  console.log(params.props.email);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = useCallback(async data => {
    try {
      const newData = {
        email: params.props.email,
        password: data.password,
      };

      const response = await axios.post(
        'http://10.0.2.2:8080/api/management/update-password',
        newData,
      );
      if (response.status === 200) {
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
              <S.Title>Alterar senha</S.Title>
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
            <S.BulletList>
              <S.BulletItem>• Min. 8 caracteres</S.BulletItem>
              <S.BulletItem>
                • Incluir 1 letra maiúscula e 1 minúscula
              </S.BulletItem>
              <S.BulletItem>• Incluir um número</S.BulletItem>
              <S.BulletItem>• Incluir um caractere especial</S.BulletItem>
            </S.BulletList>
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

export default ChangePassword;
