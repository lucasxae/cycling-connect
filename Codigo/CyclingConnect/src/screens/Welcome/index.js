import React from 'react';
import {Button, CustomText, CarouselBase} from '../../components';
import {useNavigation} from '@react-navigation/native';
import * as S from './styles';

function Welcome() {
  const navigation = useNavigation();

  const handleNavigation = page => {
    navigation.navigate(page);
  };

  return (
    <S.SafeAreaView>
      <CarouselBase />
      <S.Content>
        <S.Container>
          <Button
            title="Login"
            fullWidth={true}
            onPress={() => handleNavigation('FirstStep')}>
            <CustomText bold color={'#fff'}>
              Comece já sua jornada
            </CustomText>
          </Button>
          <Button
            mt={10}
            bgColor={'#fff'}
            fullWidth={true}
            onPress={() => handleNavigation('Login')}>
            <CustomText bold color={'#000'}>
              Já tem uma conta? Faça login
            </CustomText>
          </Button>
        </S.Container>
      </S.Content>
    </S.SafeAreaView>
  );
}

export default Welcome;
