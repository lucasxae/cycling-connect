import React from 'react';
import {Text, Button} from 'react-native';
import * as S from './styles';
import Carousel from '../../components/Carousel';
import slides from './slides';

function Welcome() {
  return (
    <S.Container>
      <Text>Bem-vindo!</Text>
      <Carousel data={slides} />
      <Button title="Go to Home" onPress={() => console.log('nada ainda')} />
    </S.Container>
  );
}

export default Welcome;
