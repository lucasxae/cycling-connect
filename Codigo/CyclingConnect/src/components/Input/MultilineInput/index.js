import React from 'react';
import * as S from './styles';

function MultilineInput({label, hasMargin, counter, ...props}) {
  return (
    <S.Container hasMargin={hasMargin}>
      <S.Label>{label}</S.Label>
      <S.Input multiline {...props} maxLength={200} />
      <S.CharacterCounter>{counter}</S.CharacterCounter>
    </S.Container>
  );
}

export default MultilineInput;
