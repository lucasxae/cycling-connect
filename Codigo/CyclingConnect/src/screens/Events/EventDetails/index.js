import React from 'react';
import {View, Image, Linking} from 'react-native';
import {useRoute} from '@react-navigation/native';
import BikingIcon from '../../../assets/icons/biking-icon.svg';
import Bike1 from '../../../assets/images/biking1.jpg';
import Bike2 from '../../../assets/images/biking2.jpg';
import Bike3 from '../../../assets/images/biking3.jpg';
import Bike4 from '../../../assets/images/biking4.jpg';
import Bike5 from '../../../assets/images/biking5.jpg';
import Bike6 from '../../../assets/images/biking6.jpg';

import * as S from './styles';

function EventDetails() {
  const route = useRoute();
  const item = route.params;

  const chooseImageRandomly = () => {
    const images = [Bike1, Bike2, Bike3, Bike4, Bike5, Bike6];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <S.SafeAreaView>
      <Image
        source={chooseImageRandomly()}
        style={{
          width: '100%',
          height: 300,
          marginBottom: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <S.Container>
        <View style={{flex: 1}}>
          <S.Header>
            <BikingIcon />
            <S.HeaderContent>
              <S.Title>{item.title}</S.Title>
              <S.Subtitle>
                Data: {item.date} às {item.hour}
              </S.Subtitle>
            </S.HeaderContent>
          </S.Header>
          <S.Description>{item.description}</S.Description>
          <View style={{marginTop: 5}}>
            <S.Description>Inscrições: {item.registrationStatus}</S.Description>
            <S.Separator style={{marginTop: 10, marginBottom: 10}} />
            <S.Title>+ Informações</S.Title>
            <S.Description>Local: {item.location}</S.Description>
            <S.Description>Distância: {item.distance} km</S.Description>
            <S.Description>Preço: R$ {item.value}</S.Description>
          </View>
        </View>
        <S.CustomButton
          fullWidth={true}
          onPress={() =>
            Linking.openURL('https://www.sympla.com.br').catch(
              'O link informado não existe.',
            )
          }
          bgColor={'#fff'}>
          <S.ButtonText>Ver mais</S.ButtonText>
        </S.CustomButton>
      </S.Container>
    </S.SafeAreaView>
  );
}

export default EventDetails;
