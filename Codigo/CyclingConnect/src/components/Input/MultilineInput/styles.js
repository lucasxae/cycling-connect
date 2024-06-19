import styled, {css} from 'styled-components/native';
import theme from '../../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const Container = styled.View`
  margin-top: ${props => (props.hasMargin ? 14 : 0)}px;
`;

export const Label = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.regular};
  color: ${colors.white};
  margin-bottom: 12px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.secondary.placeholder,
})`
  flex: 1;
  font-family: ${fonts.primary.primaryMedium};
  font-size: ${fontSizes.regular};

  height: 80px;
  padding: 12px 15px;
  min-height: 100%;
  border-radius: 10px;

  text-align-vertical: top;
  color: ${colors.secondary.text};
  background-color: ${colors.secondary.input};
`;

export const CharacterCounter = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.small};
  color: ${colors.secondary.placeholder};
  margin-top: 6px;
  text-align: right;
`;
