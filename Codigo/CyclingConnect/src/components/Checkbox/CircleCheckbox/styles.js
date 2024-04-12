import styled from 'styled-components/native';
import theme from '../../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const Content = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const Label = styled.Text`
  font-family: ${fonts.primary.primaryMedium};
  font-size: ${fontSizes.small};
  color: #000;
  margin-top: 14px;
  margin-bottom: 2px;
`;

export const Checkbox = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  border-width: ${({isSelected}) => (isSelected ? 1.5 : 1)}px;
  border-color: ${({isSelected}) =>
    isSelected ? colors.palette.primary : '#000'};
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: transparent;
`;

export const CheckMark = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 5px;
  background-color: ${colors.palette.primary};
`;

export const CheckboxText = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.small};
  color: #000;
`;
