import React, {useCallback, useMemo, useRef} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {loginSchema} from '../../utils/schemas/schemas';
import {Button, CustomText, CustomInput, Link} from '../../components';
import {View, Keyboard, ActivityIndicator} from 'react-native';
import * as S from './styles';
import useKeyboardListener from '../../hooks/useKeyboardListener';
import {useAuth} from '../../context/AuthContext';
import Logo from '../../components/Logo';
import theme from '../../global/theme';
import {BottomSheetModal, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function Login({navigation}) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['10%', '33%'], []);
  const keyboardOpen = useKeyboardListener();
  const {onLogin} = useAuth();
  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback(async data => {
    try {
      const response = await onLogin(data);
      return response;
    } catch (err) {
      console.log('err', err);
      setError('root', {
        type: 'manual',
        message: err.response.status,
      });
      handleOpenPress();
    }
  }, []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleCloseAction = () => bottomSheetRef.current?.dismiss();

  const handleOpenPress = () => bottomSheetRef.current?.present();

  const errorModalComponent = () => {
    return (
      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        onChange={handleSheetChanges}
        enableDynamicSizing={true}
        style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
        handleIndicatorStyle={{backgroundColor: '#444'}}
        backgroundStyle={{
          backgroundColor: '#444',
        }}>
        <BottomSheetScrollView>
          <View style={{alignItems: 'center'}}>
            <S.ErrorIcon />
            <S.Title>Erro!</S.Title>
            <CustomText bold color={'#fff'} mb={10}>
              Opa! Ocorreu um erro ao tentar fazer login. Tente novamente mais
              tarde.
            </CustomText>
            <CustomText color={'#999'}>
              Código do erro: {errors.root.message}
            </CustomText>
          </View>
          <Button
            hasMargin
            mt={30}
            fullWidth
            onPress={() => handleCloseAction()}
            mb={30}>
            <CustomText bold color={'#fff'}>
              Fechar
            </CustomText>
          </Button>
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <S.SafeAreaView keyboardVisible={keyboardOpen}>
        <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
          <S.Container>
            {errors.root && errorModalComponent()}
            <S.Content>
              <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View>
                  <S.Header>
                    <S.Title>
                      Faça Login no
                      <Logo />
                    </S.Title>
                  </S.Header>
                  <Controller
                    name="email"
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <CustomInput
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
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
                        isPassword={true}
                        password
                        hasMargin
                      />
                    )}
                  />
                  <Link
                    onPress={() => navigation.navigate('EmailVerification')}
                    linkText={'Esqueceu a senha?'}
                    align={'right'}
                    justifyContent={'flex-end'}
                    color={'#363636'}
                    size={'14px'}
                  />
                  <Button
                    hasMargin
                    mt={30}
                    fullWidth
                    onPress={handleSubmit(onSubmit)}
                    disabled={(!errors.root && !isValid) || isSubmitting}>
                    {isSubmitting ? (
                      <ActivityIndicator size={20} color={'#fff'} />
                    ) : (
                      <CustomText bold color={'#fff'}>
                        Entrar
                      </CustomText>
                    )}
                  </Button>
                </View>
                <View>
                  <Link
                    onPress={() => navigation.navigate('FirstStep')}
                    regularText={`Não tem uma conta?`}
                    color={theme.colors.redPalette.primary}
                    linkText={'Cadastre-se'}
                    align={'center'}
                    mt={30}
                    bold
                  />
                </View>
              </View>
            </S.Content>
          </S.Container>
        </S.TouchableWrapper>
      </S.SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default Login;
