import styled from 'styled-components/native';
import theme from '../../global/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const {colors} = theme;

export const ButtonContainer = styled.TouchableOpacity`
  width: auto;
  height: auto;
  align-self: auto;
  margin-top: ${props => (props.mt ? props.mt : props.hasMargin ? 40 : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  margin-left: ${props => (props.ml ? props.ml : 0)}px;
  margin-right: ${props => (props.mr ? props.mr : 0)}px;
`;

export const Button = styled.TouchableOpacity`
  align-self: auto;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  width: ${props =>
    props.width ? props.width : props.fullWidth ? '100%' : 300}px;
  height: ${props => (props.height ? props.height : 50)}px;
  padding: ${props => (props.padding ? props.padding : 0)}px;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '8px')};
  background-color: ${props =>
    props.bgColor ? props.bgColor : colors.palette.primary};
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
