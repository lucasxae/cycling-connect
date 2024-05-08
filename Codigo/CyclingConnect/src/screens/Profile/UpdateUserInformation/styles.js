import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native';
import theme from '../../../global/theme';

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
  contentContainerStyle: {
    flexGrow: 1,
  },
})``;

export const Content = styled.View`
  flex: 1;
  padding: 0 30px 30px 30px;
  justify-content: space-between;
`;

export const Header = styled.View`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${fonts.secondary.secondarySemiBold};
  font-size: ${fontSizes.extraLarge};
  color: ${colors.redPalette.primary};
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.regular};
  line-height: 24px;
  color: ${colors.secondary.lightText};
`;

export const Error = styled.Text`
  margin-top: 2px;
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.smaller};
  color: ${colors.error};
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${({hasError}) => (hasError ? 0 : 14)}px;
`;

export const CheckboxText = styled.Text`
  font-family: ${({link}) =>
    link ? fonts.primary.primaryMedium : fonts.primary.primaryRegular};
  text-decoration: ${({link}) => (link ? 'underline' : 'none')};
  font-size: ${fontSizes.smaller};
  color: #fff;
`;
