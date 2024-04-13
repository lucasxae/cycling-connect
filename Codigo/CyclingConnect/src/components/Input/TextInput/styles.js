import styled from 'styled-components/native';
import theme from '../../../global/theme';

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
  background-color: ${colors.secondary.input};
  border-radius: 10px;
`;

export const Label = styled.Text`
  font-family: ${fonts.primary.primaryMedium};
  font-size: ${fontSizes.regular};
  color: ${colors.white};
  margin-bottom: 6px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.secondary.placeholder,
})`
  flex: 1;
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.small};
  color: ${colors.secondary.text};
`;

export const IconButton = styled.TouchableOpacity`
  padding-right: 6px;
`;
