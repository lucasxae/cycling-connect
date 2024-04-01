import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const Container = styled.View`
  margin-top: ${props => (props.hasMargin ? 14 : 0)}px;
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 45px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  background-color: ${colors.background.secondary};
  border-radius: 5px;
`;

export const Label = styled.Text`
  font-family: ${fonts.primaryMedium};
  font-size: ${fontSizes.small};
  color: #000;
  margin-bottom: 2px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: ${fonts.primaryRegular};
  font-size: ${fontSizes.small};
  color: #000;
`;
