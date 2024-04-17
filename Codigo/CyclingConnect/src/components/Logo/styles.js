import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const LogoContainer = styled.View`
  flex-direction: row;
`;

export const Cycling = styled.Text`
  font-family: ${fonts.secondaryItalic.secondarySemiBold};
  font-size: ${fontSizes.extraLarge};
  color: ${colors.white};
`;

export const Connect = styled(Cycling)`
  color: ${colors.redPalette.primary};
  margin-left: 5px;
`;
