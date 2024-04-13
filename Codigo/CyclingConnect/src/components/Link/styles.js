import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const Link = styled.TouchableOpacity`
  margin-top: ${props => (props.mt ? props.mt : 2)}px;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
`;

export const RegularText = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.regular};
  margin-top: 4px;
  color: ${props => (props.color ? props.color : colors.secondary.lightText)};
  text-align: ${props => (props.align ? props.align : 'center')};
`;

export const LinkText = styled(RegularText)`
  font-family: ${fonts.primary.primaryBold};
  color: ${colors.redPalette.primary};
`;
