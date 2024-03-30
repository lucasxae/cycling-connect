import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors, fonts} = theme;

export const ButtonContainer = styled.TouchableOpacity`
  width: auto;
  height: auto;
  margin: 0;
  align-self: auto;
`;

export const Button = styled.TouchableOpacity`
  align-self: auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  width: ${props => (props.width ? props.width : 300)}px;
  height: ${props => (props.height ? props.height : 50)}px;
  padding: ${props => (props.padding ? props.padding : 0)}px;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.palette.primary};
`;
