import React, {useCallback, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signUpSchema} from '../../utils/schemas/schemas';
import axios from 'axios';
import {
  Link,
  Button,
  CustomText,
  CustomInput,
  CircleCheckbox,
  SquareCheckbox,
} from '../../components';
import * as S from './styles';
import {
  cpfMask,
  dateMask,
  onlyLetters,
  phoneMask,
  normalize,
  formatValue,
} from '../../utils/masks';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import DatePicker from 'react-native-date-picker';
import Toast from 'react-native-toast-message';
import {Keyboard} from 'react-native';

function Signup({navigation}) {
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      login: '',
      password: '',
      phone: '',
      gender: '',
      birthdate: '',
      email: '',
      cpf: '',
    },
    resolver: zodResolver(signUpSchema),
  });

  const handleTerms = value => {
    setIsChecked(value);
  };

  const onSubmit = useCallback(async data => {
    try {
      const response = await axios.post(
        'http://10.0.2.2:8080/auth/register',
        {
          birthdate: formatValue(data.birthdate),
          cpf: formatValue(data.cpf),
          email: data.email,
          gender: data.gender,
          login: data.login,
          password: data.password,
          phone: formatValue(data.phone),
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
      showToast();
      setError('root', {
        type: 'manual',
        message:
          'Ops! Ocorreu um erro ao tentar fazer seu cadastro, tente novamente mais tarde.',
      });
    }
  }, []);

  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Ops! Ocorreu um erro no cadastro.',
      text2: 'Tente novamente mais tarde.',
    });
  };

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <S.Content>
            <S.Header>
              <S.Title>Comece Agora</S.Title>
              <S.Subtitle>
                Comece agora sua jornada no Cycling Connect.
              </S.Subtitle>
            </S.Header>

            <Controller
              name="login"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Nome"
                  placeholder="Nome completo"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={onlyLetters(value)}
                />
              )}
            />
            {errors.login && <S.Error>{errors.login.message}</S.Error>}
            <Controller
              name="cpf"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="CPF"
                  placeholder="Insira seu CPF"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={cpfMask(value)}
                  maxLength={14}
                  hasMargin
                />
              )}
            />
            {errors.cpf && <S.Error>{errors.cpf.message}</S.Error>}
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
              name="phone"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <CustomInput
                  label="Celular"
                  placeholder="(XX) X XXXX-XXXX"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={phoneMask(value)}
                  maxLength={15}
                  hasMargin
                />
              )}
            />
            {errors.phone && <S.Error>{errors.phone.message}</S.Error>}
            <Controller
              name="birthdate"
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <CustomInput
                    label="Data de nascimento"
                    placeholder="DD/MM/YYYY"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    icon={faCalendar}
                    onPressIcon={() => setOpen(true)}
                    value={dateMask(value)}
                    maxLength={10}
                    hasMargin
                  />
                  <DatePicker
                    modal
                    mode={'date'}
                    buttonColor={'#F03C24'}
                    open={open}
                    date={date}
                    onDateChange={date => {
                      setDate(date);
                      onChange(normalize(date));
                    }}
                    onConfirm={date => {
                      setOpen(false);
                      setDate(date);
                      onChange(normalize(date));
                    }}
                    onCancel={() => setOpen(false)}
                  />
                </>
              )}
            />

            {errors.birthdate && <S.Error>{errors.birthdate.message}</S.Error>}
            <Controller
              name="gender"
              control={control}
              render={({field: {onChange, value}}) => (
                <>
                  <S.CheckboxContainer hasError={errors.gender}>
                    <CircleCheckbox
                      label={'Gênero'}
                      options={[
                        {name: 'Feminino', value: 'F'},
                        {name: 'Masculino', value: 'M'},
                      ]}
                      onSelect={onChange}
                      selectedOption={value}
                    />
                  </S.CheckboxContainer>
                  {errors.gender && <S.Error>{errors.gender.message}</S.Error>}
                </>
              )}
            />
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
                  hasMargin={errors.gender}
                  isPassword={true}
                  password
                />
              )}
            />
            {errors.password && <S.Error>{errors.password.message}</S.Error>}
            <SquareCheckbox onSelect={handleTerms}>
              <S.CheckboxText>
                Ao prosseguir, você concorda com os{' '}
                <S.CheckboxText link>Termos de Uso</S.CheckboxText>
                {'\n'}e a{' '}
                <S.CheckboxText link>Política de Privacidade</S.CheckboxText> do
                Cycling Connect.
              </S.CheckboxText>
            </SquareCheckbox>
            <Button
              hasMargin
              mt={30}
              fullWidth
              onPress={handleSubmit(onSubmit)}
              disabled={!isChecked || !isValid || isSubmitting}>
              <CustomText bold color={'#fff'}>
                Cadastrar
              </CustomText>
            </Button>
            <Link
              onPress={() => navigation.navigate('Login')}
              regularText={'Já possui uma conta?'}
              color={'#CD2B15'}
              linkText={'Faça login'}
              align={'center'}
              mt={20}
            />
          </S.Content>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default Signup;
