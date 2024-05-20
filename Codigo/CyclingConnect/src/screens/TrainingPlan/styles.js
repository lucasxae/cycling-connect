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
