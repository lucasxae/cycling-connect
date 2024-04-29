import styled from 'styled-components/native';
import theme from '../../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const Label = styled.Text`
  font-family: ${fonts.primary.primaryMedium};
  font-size: ${fontSizes.small};
  color: #fff;
  margin-top: 14px;
  margin-bottom: 2px;
`;

export const Checkbox = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 2px;
  border-width: ${({isSelected}) => (isSelected ? 1.5 : 1)}px;
  border-color: ${({isSelected}) =>
    isSelected ? colors.redPalette.primary : '#fff'};
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: ${({isSelected}) =>
    isSelected ? colors.redPalette.primary : 'transparent'};
`;

export const CheckMark = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 5px;
  background-color: ${colors.redPalette.primary};
`;

export const CheckboxText = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.smaller};
  color: #fff;
`;
