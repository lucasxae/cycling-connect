import React from 'react';
import {View} from 'react-native';
import * as S from './styles';

function OTPInput({label, onTextChange}) {
  return (
    <View>
      <S.Label>{label}</S.Label>
      <S.OTPInput onTextChange={onTextChange} />
    </View>
  );
}

export default OTPInput;
