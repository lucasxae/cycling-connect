import React from 'react';
import * as S from './styles';

function Link({linkText, regularText, disabled, onPress, ...props}) {
  return (
    <S.Link mt={props.mt}>
      <S.TextWrapper
        justifyContent={props.justifyContent}
        column={props.column}>
        {regularText && (
          <S.RegularText align={props.align}>{regularText} </S.RegularText>
        )}
        <S.LinkButton onPress={onPress} disabled={disabled}>
          <S.LinkText
            disabled={disabled}
            bold={props.bold}
            size={props.size}
            color={props.color}>
            {linkText}
          </S.LinkText>
        </S.LinkButton>
      </S.TextWrapper>
    </S.Link>
  );
}

export default Link;
