import React, {useCallback, useEffect, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {firstStepSignupSchema} from '../../../utils/schemas/schemas';
import {
  Button,
  CustomText,
  CustomInput,
  CircleCheckbox,
  Steps,
} from '../../../components';
import * as S from './styles';
import {
  cpfMask,
  dateMask,
  onlyLetters,
  phoneMask,
  normalize,
  formatValue,
} from '../../../utils/masks';
import {View} from 'react-native';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import DatePicker from 'react-native-date-picker';
import {Keyboard} from 'react-native';

function FirstStep({navigation}) {
  const [progress, setProgress] = useState(0);
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
      cpf: '',
      phone: '',
      birthdate: '',
      gender: '',
    },
    resolver: zodResolver(firstStepSignupSchema),
  });

  const onSubmit = useCallback(data => {
    try {
      const formData = {
        birthdate: formatValue(data.birthdate),
        cpf: formatValue(data.cpf),
        phone: formatValue(data.phone),
        login: data.login,
        gender: data.gender,
      };
      if (formData) {
        navigation.navigate('LastStep', {formData, progress});
      }
    } catch (err) {
      setError('root', {
        type: 'manual',
        message: 'Erro ao enviar formulário.',
      });
    }
  }, []);

  useEffect(() => {
    setProgress(1);
  }, [progress]);

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <S.Content>
            <View>
              <S.Header>
                <Steps steps={[{progress: progress}, {progress: 0}]} />
                <S.Title>Comece Agora</S.Title>
                <S.Subtitle>
                  Precisamos de algumas informações sobre você para dar início
                  ao seu cadastro.
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

              {errors.birthdate && (
                <S.Error>{errors.birthdate.message}</S.Error>
              )}
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
                    {errors.gender && (
                      <S.Error>{errors.gender.message}</S.Error>
                    )}
                  </>
                )}
              />
            </View>
            <View>
              <Button
                hasMargin
                mt={30}
                fullWidth
                onPress={handleSubmit(onSubmit)}
                disabled={!isValid || isSubmitting}>
                <CustomText bold color={'#fff'}>
                  Próximo
                </CustomText>
              </Button>
            </View>
          </S.Content>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default FirstStep;
