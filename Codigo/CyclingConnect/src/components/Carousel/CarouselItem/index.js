import React from 'react';
import * as S from './styles';

function CarouselItem({item}) {
  return (
    <S.Container>
      <S.Title>{item.title}</S.Title>
      <S.Image source={item.image} resizeMode="contain" />
      <S.DescriptionContainer>
        <S.Description>{item.description}</S.Description>
      </S.DescriptionContainer>
    </S.Container>
  );
}

export default CarouselItem;
