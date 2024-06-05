import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native';
import {Button} from '../../../components';
import theme from '../../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const KeyboardWrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const TouchableWrapper = styled(TouchableWithoutFeedback).attrs({
  flex: 1,
  accessible: false,
})``;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.secondary.background};
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 30px 30px 30px;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  margin: 0 0 10px 18px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${fonts.secondary.secondarySemiBold};
  font-size: ${fontSizes.extraLarge};
  color: ${colors.redPalette.primary};
  margin-bottom: -10px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.regular};
  color: #b4b4b4;
`;

export const Description = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.medium};
  color: #fff;
  padding-top: 10px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #3c3c3c;
`;

export const TrainingContent = styled.View`
  padding: 12px 0;
`;

export const TrainingTitle = styled.Text`
  font-family: ${fonts.primary.primaryMedium};
  font-size: ${fontSizes.large};
  color: #dadada;
`;

export const TrainingDescription = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.regular};
  color: #a4a4a4;
  padding-top: 2px;
`;

export const CustomButton = styled(Button).attrs({
  bgColor: colors.redPalette.primary,
})``;

export const ButtonText = styled.Text`
  font-family: ${fonts.primary.primaryBold};
  font-size: ${fontSizes.regular};
  color: ${colors.white};
`;
