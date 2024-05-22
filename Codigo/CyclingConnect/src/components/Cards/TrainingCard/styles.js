import styled from 'styled-components/native';
import theme from '../../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const Card = styled.TouchableOpacity`
  background-color: #3c3c3c;
  border-radius: 10px;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const LeftPart = styled.View`
  align-items: center;
  padding: 15px;
`;

export const Day = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: 20px;
  color: ${colors.white};
`;

export const Number = styled.Text`
  font-family: ${fonts.primary.primaryBold};
  color: ${colors.redPalette.primary};
  font-size: 30px;
`;

export const Month = styled(Day)``;

export const Title = styled.Text`
  font-family: ${fonts.secondary.secondaryMedium};
  font-size: ${fontSizes.large};
  color: ${colors.redPalette.primary};
  margin-bottom: -5px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.regular};
  color: ${colors.white};
`;

export const Description = styled(Subtitle)`
  font-size: ${fontSizes.small};
  padding-top: 12px;
  flex-shrink: 1;
`;

export const RightPart = styled.View`
  flex: 1;
  padding: 15px;
  border-left-width: 1px;
  border-color: #484848;
  width: 100%;
`;
