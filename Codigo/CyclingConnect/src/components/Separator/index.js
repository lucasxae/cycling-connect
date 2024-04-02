import React from 'react';
import * as S from './styles';

function Separator({text, ...props}) {
  return (
    <S.Separator mv={props.mv}>
      <S.Line />
      {text && <S.Text>{text}</S.Text>}
      <S.Line />
    </S.Separator>
  );
}

export default Separator;
