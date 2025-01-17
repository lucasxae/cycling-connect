import styled from 'styled-components/native';
import theme from '../../global/theme';

const {fonts} = theme;

export const TextContainer = styled.View`
  margin-top: ${props => (props.hasMargin ? '14px' : '0')};
`;

export const Text = styled.Text`
  font-family: ${props =>
    props.bold
      ? `${fonts.primary.primaryMedium}`
      : `${fonts.primary.primaryRegular}`};
  font-size: ${props => (props.size ? props.size : 16)}px;
  line-height: ${props => (props.lineHeight ? props.lineHeight : 24)}px;
  color: ${props => (props.color ? props.color : '#000')};
  text-align: ${props => (props.align ? props.align : 'center')};
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  margin-vertical: ${props => (props.mv ? props.mv : 0)}px;
  margin-horizontal: ${props => (props.mh ? props.mh : 0)}px;
`;
