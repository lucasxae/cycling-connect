import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const Link = styled.View`
  margin-top: ${props => (props.mt ? props.mt : 2)}px;
`;

export const TextWrapper = styled.View`
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
`;

export const LinkButton = styled.TouchableOpacity``;

export const RegularText = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${props => (props.size ? props.size : fontSizes.regular)};
  margin-top: 4px;
  color: ${props => (props.color ? props.color : colors.secondary.lightText)};
  text-align: ${props => (props.align ? props.align : 'center')};
`;

export const LinkText = styled(RegularText)`
  font-family: ${props =>
    props.bold ? fonts.primary.primaryBold : fonts.primary.primaryMedium};
  color: ${colors.redPalette.primary};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;
