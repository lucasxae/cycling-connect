import React, {useCallback, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {updateUserInfoSchema} from '../../../utils/schemas/schemas';
import axios from 'axios';
import {
  Button,
  CustomText,
  CustomInput,
  CircleCheckbox,
} from '../../../components';
import * as S from './styles';
import {
  dateMask,
  phoneMask,
  normalize,
  formatValue,
} from '../../../utils/masks';
import {faCalendar} from '@fortawesome/free-regular-svg-icons';
import DatePicker from 'react-native-date-picker';
import Toast from 'react-native-toast-message';
import {Keyboard, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

function UpdateUserInformation({navigation}) {
  const route = useRoute();
  const {params} = route;

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
      login: params?.userInfo?.login,
      phone: params?.userInfo?.phone,
      gender: params?.userInfo?.gender,
      birthdate: params?.userInfo?.birthdate,
    },
    resolver: zodResolver(updateUserInfoSchema),
  });

  const onSubmit = useCallback(async data => {
    try {
      const newData = {
        email: data.login,
        phone: formatValue(data.phone),
        gender: data.gender,
        birthdate: formatValue(data.birthdate),
      };
      console.log(newData);
      const response = await axios.put(
        `http://10.0.2.2:8080/api/users/updateUserData/${params.userInfo.username}`,
        newData,
      );
      if (response.status === 200) {
        navigation.navigate('Profile');
      }
      return response;
    } catch (err) {
      console.log(err);
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
            <View>
              <S.Header>
                <S.Title>Editar Perfil</S.Title>
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
                    value={value}
                  />
                )}
              />
              {errors.login && <S.Error>{errors.login.message}</S.Error>}
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
                        defaultOption={value}
                      />
                    </S.CheckboxContainer>
                    {errors.gender && (
                      <S.Error>{errors.gender.message}</S.Error>
                    )}
                  </>
                )}
              />
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
                  />
                )}
              />
              {errors.phone && <S.Error>{errors.phone.message}</S.Error>}
            </View>
            <Button
              hasMargin
              mt={30}
              fullWidth
              onPress={handleSubmit(onSubmit)}
              disabled={!isValid || isSubmitting}>
              <CustomText bold color={'#fff'}>
                Atualizar perfil
              </CustomText>
            </Button>
          </S.Content>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default UpdateUserInformation;
