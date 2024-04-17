import React, {useCallback, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {View, Keyboard} from 'react-native';
import axios from 'axios';
import {zodResolver} from '@hookform/resolvers/zod';
import {secondStepSignupSchema} from '../../../utils/schemas/schemas';
import {
  Button,
  CustomText,
  CustomInput,
  SquareCheckbox,
  Steps,
} from '../../../components';
import * as S from './styles';
import {passwordRequirements} from './requirements';

function LastStep({navigation}) {
  const route = useRoute();
  const {params} = route;
  const [progress, setProgress] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(secondStepSignupSchema),
  });

  const onSubmit = useCallback(async data => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:8080/auth/register',
        {
          birthdate: params.formData.birthdate,
          cpf: params.formData.cpf,
          email: data.email,
          gender: params.formData.gender,
          login: params.formData.login,
          password: data.password,
          phone: params.formData.phone,
          role: 'USER',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        navigation.navigate('Login');
      }
      return response;
    } catch (err) {
      console.log(err);
      setError('root', {
        type: 'manual',
        message: 'Erro ao enviar formulário.',
      });
    }
  }, []);

  const handleTerms = value => {
    setIsChecked(value);
  };

  useEffect(() => {
    setProgress(1);
  }, [progress]);

  const termsAndConditions = () => {
    return (
      <S.CheckboxContainer>
        <SquareCheckbox onSelect={handleTerms} />
        <View>
          <S.CheckboxText>
            Ao prosseguir, você concorda com os{' '}
            <S.CheckboxText link>Termos de Uso</S.CheckboxText> do Cycling
            Connect.
          </S.CheckboxText>
        </View>
      </S.CheckboxContainer>
    );
  };

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <S.Content>
            <View>
              <S.Header>
                <Steps steps={[{progress: 1}, {progress: progress}]} />
                <S.Title>Estamos quase lá</S.Title>
                <S.Subtitle>
                  Falta pouco para você iniciar sua jornada no Cycling Connect.
                </S.Subtitle>
              </S.Header>
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
                    autoComplete="email"
                    keyboardType={'email-address'}
                    hasMargin
                  />
                )}
              />
              {errors.email && <S.Error>{errors.email.message}</S.Error>}
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
                    isPassword={true}
                    password
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
              <S.PasswordRequirements>
                {passwordRequirements.map((item, index) => (
                  <S.Requirements key={index}>{item.text}</S.Requirements>
                ))}
              </S.PasswordRequirements>
            </View>
            <View>
              {termsAndConditions()}
              <Button
                hasMargin
                mt={15}
                fullWidth
                onPress={handleSubmit(onSubmit)}
                disabled={!isChecked || !isValid || isSubmitting}>
                <CustomText bold color={'#fff'}>
                  Cadastrar
                </CustomText>
              </Button>
            </View>
          </S.Content>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default LastStep;
