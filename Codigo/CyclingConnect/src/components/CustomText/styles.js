import styled from 'styled-components/native';
import theme from '../../global/theme';

const {fonts} = theme;

export const Text = styled.Text`
  font-family: ${props =>
    props.bold ? `${fonts.primaryMedium}` : `${fonts.primaryRegular}`};
  font-size: ${props => (props.size ? props.size : 16)}px;
  line-height: ${props => (props.lineHeight ? props.lineHeight : 24)}px;
  color: ${props => (props.color ? props.color : '#000')};
  text-align: ${props => (props.align ? props.align : 'center')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)}px;
`;
