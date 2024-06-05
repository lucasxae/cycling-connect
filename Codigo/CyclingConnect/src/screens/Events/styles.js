import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native';
import theme from '../../global/theme';

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

export const Header = styled.View`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-family: ${fonts.secondary.secondarySemiBold};
  font-size: ${fontSizes.extraLarge};
  color: ${colors.redPalette.primary};
`;

export const Card = styled.View`
  background-color: #444;
  border-radius: 10px;
  padding: 20px;
  margin-right: 15px;
  margin-top: 25px;
  padding-bottom: 20px;
`;

export const Content = styled.View``;

export const CardTitle = styled.Text`
  font-family: ${fonts.secondary.secondarySemiBold};
  font-size: ${fontSizes.large};
  color: ${colors.redPalette.primary};
`;

export const CardDate = styled.Text`
  font-family: ${fonts.secondary.secondaryRegular};
  font-size: ${fontSizes.medium};
  color: ${colors.secondary.text};
`;

export const CardText = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.medium};
  color: ${colors.secondary.text};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${colors.secondary.placeholder};
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const EmptyText = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.medium};
  color: ${colors.white};
  text-align: center;
  padding: 30px;
`;
