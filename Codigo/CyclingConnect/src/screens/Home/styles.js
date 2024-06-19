import styled from 'styled-components/native';
import theme from '../../global/theme';
import {TouchableWithoutFeedback} from 'react-native';
import {Button} from '../../components';

const {colors, fonts, fontSizes} = theme;

export const TouchableWrapper = styled(TouchableWithoutFeedback).attrs({
  flex: 1,
  accessible: false,
})``;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.secondary.background};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {},
})``;

export const Content = styled.View`
  flex: 1;
  padding: 0 30px 30px 30px;
  margin-bottom: 60px;
  justify-content: center;
`;

export const CategoryContainer = styled.TouchableOpacity`
  justify-content: space-around;
  align-items: center;
  width: 140px;
  padding: 20px 20px 15px 20px;
  background-color: ${colors.redPalette.primary};
  border-radius: 10px;
  margin: 10px 15px 0 0;
`;

export const Title = styled.Text`
  font-family: ${fonts.secondary.secondaryMedium};
  font-size: ${fontSizes.extraLarge};
  color: ${colors.white};
  margin-top: 20px;
`;

export const Separator = styled.View`
  flex: 1;
  border-color: #333;
  border-bottom-width: 1px;
`;

export const CustomButton = styled(Button).attrs({
  bgColor: colors.redPalette.primary,
})`
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.primary.primaryBold};
  font-size: ${fontSizes.regular};
  color: ${colors.white};
`;

export const CardImage = styled.Image`
  width: 180px;
  height: 120px;
  border-radius: 10px;
`;
