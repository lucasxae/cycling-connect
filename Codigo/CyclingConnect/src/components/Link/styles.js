import styled from 'styled-components/native';
import theme from '../../global/theme';

const {fonts, fontSizes} = theme;

export const Link = styled.TouchableOpacity`
  margin-top: ${props => (props.mt ? props.mt : 2)}px;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
`;

export const RegularText = styled.Text`
  font-family: ${fonts.primaryRegular};
  font-size: ${fontSizes.small};
  margin-top: 4px;
  color: #000;
  text-align: ${props => (props.align ? props.align : 'center')};
`;

export const LinkText = styled(RegularText)`
  font-family: ${fonts.primaryMedium};
  text-decoration: underline;
`;
