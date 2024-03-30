import React from 'react';
import * as S from './styles';

function Button({children, onPress, ...props}) {
  return (
    <S.ButtonContainer>
      <S.Button
        onPress={onPress}
        disabled={props.disabled}
        width={props.width}
        height={props.height}
        padding={props.padding}
        borderRadius={props.borderRadius}
        backgroundColor={props.bgColor}>
        {children}
      </S.Button>
    </S.ButtonContainer>
  );
}

export default Button;
