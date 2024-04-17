import {Dimensions, Animated, Easing} from 'react-native';
import React from 'react';
import * as S from './styles';

const CarouselItem = ({item}) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <S.Container>
      <S.Bg>
        <S.Image source={item.img} resizeMode="cover" />
      </S.Bg>
      <S.Logo />
    </S.Container>
  );
};

export default CarouselItem;
