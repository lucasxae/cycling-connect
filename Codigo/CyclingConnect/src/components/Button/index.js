import React from 'react';
import * as S from './styles';

function Button({
  children,
  disabled,
  onPress,
  hasIcon,
  icon,
  iconSize,
  iconColor,
  customIcon,
  ...props
}) {
  return (
    <S.ButtonContainer
      onPress={onPress}
      disabled={disabled}
      mt={props.mt}
      mb={props.mb}
      ml={props.ml}
      mr={props.mr}
      hasMargin={props.hasMargin}>
      <S.Button
        onPress={onPress}
        disabled={disabled}
        width={props.width}
        height={props.height}
        fullWidth={props.fullWidth}
        padding={props.padding}
        borderRadius={props.borderRadius}
        bgColor={props.bgColor}
        {...props}>
        {icon && <S.Icon icon={icon} size={iconSize} color={iconColor} />}
        {customIcon && customIcon}
        {children}
      </S.Button>
    </S.ButtonContainer>
  );
}

export default Button;
