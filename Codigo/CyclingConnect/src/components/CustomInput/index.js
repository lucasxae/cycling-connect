import React from 'react';
import {View} from 'react-native';
import * as S from './styles';

function CustomInput({label, hasMargin, ...props}) {
  return (
    <S.Container hasMargin={hasMargin}>
      <S.Label>{label}</S.Label>
      <S.Wrapper>
        <S.Input {...props} />
      </S.Wrapper>
    </S.Container>
  );
}

export default CustomInput;
