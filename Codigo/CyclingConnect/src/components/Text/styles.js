import styled from 'styled-components/native';
import theme from '../../global/theme';

const {fonts} = theme;

export const Text = styled.Text`
  font-family: 'Inter-Bold';
  font-size: ${({size}) => (size ? size : 16)}px;
  line-height: ${({lineHeight}) => (lineHeight ? lineHeight : 24)}px;
  color: ${({color}) => (color ? color : '#000')};
  text-align: ${({align}) => (align ? align : 'center')};
  margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : 0)}px;
`;
