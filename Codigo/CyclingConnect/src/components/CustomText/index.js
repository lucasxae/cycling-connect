import React from 'react';
import * as S from './styles';

function CustomText({children, ...props}) {
  return (
    <S.TextContainer hasMargin={props.hasMargin}>
      <S.Text
        align={props.align}
        color={props.color}
        size={props.size}
        bold={props.bold}
        lineHeight={props.lineHeight}
        marginBottom={props.marginBottom}>
        {children}
      </S.Text>
    </S.TextContainer>
  );
}

export default CustomText;
