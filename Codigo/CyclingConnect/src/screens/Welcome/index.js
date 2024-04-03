import React from 'react';
import {Text, Button} from 'react-native';
import * as S from './styles';
import CustomCarousel from '../../components/Carousel';
import slides from './slides';
import {useNavigation} from '@react-navigation/native';

function Welcome() {
  const navigation = useNavigation();

  const handleNavigation = page => {
    navigation.navigate(page);
  };

  return (
    <S.SafeAreaView>
      <Text>Bem-vindo!</Text>
      <CustomCarousel data={slides} />
      <Button title="Login" onPress={() => handleNavigation('Login')} />
      <Button title="Cadastro" onPress={() => handleNavigation('Signup')} />
    </S.SafeAreaView>
  );
}

export default Welcome;
