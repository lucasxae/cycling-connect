import React, {useCallback} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
  Button,
  CustomText,
  CustomInput,
  Separator,
  Link,
} from '../../components';
import {Text} from 'react-native';
import * as S from './styles';

function ChangePassword() {
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  return (
    <S.KeyboardWrapper>
      <S.SafeAreaView>
        <S.Container>
          <Text>Alterar senha</Text>
        </S.Container>
      </S.SafeAreaView>
    </S.KeyboardWrapper>
  );
}

export default ChangePassword;
