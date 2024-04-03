import React from 'react';
import * as S from './styles';

function Link({linkText, regularText, onPress, ...props}) {
  return (
    <S.Link mt={props.mt}>
      <S.TextWrapper justifyContent={props.justifyContent}>
        {regularText && (
          <S.RegularText align={props.align}>{regularText} </S.RegularText>
        )}
        <S.LinkText color={props.color} onPress={onPress}>
          {linkText}
        </S.LinkText>
      </S.TextWrapper>
    </S.Link>
  );
}

export default Link;
