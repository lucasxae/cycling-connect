import styled from 'styled-components/native';
import theme from '../../global/theme';

const {fonts, colors, fontSizes} = theme;

export const Separator = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${props => (props.mv ? props.mv : 0)}px;
`;

export const Text = styled.Text`
  font-family: ${fonts.primaryMedium};
  font-size: ${fontSizes.small};
  margin-horizontal: 2.5%;
  color: ${colors.detail};
`;

export const Line = styled.View`
  flex: 1;
  border-color: ${colors.detail};
  border-bottom-width: 1px;
`;
