import styled from 'styled-components/native';
import {Button} from '../../components';
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
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: ${fonts.secondary.secondarySemiBold};
  font-size: ${fontSizes.extraLarge};
  color: ${colors.redPalette.primary};
`;

export const BulletList = styled.View`
  margin-top: 20px;
  margin-left: 6px;
`;

export const BulletItem = styled.Text`
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.small};
  color: ${colors.secondary.lightText};
  line-height: 18px;
`;


export const CustomButton = styled(Button).attrs({
  bgColor: colors.redPalette.primary,
})``;

export const ButtonText = styled.Text`
  font-family: ${fonts.primary.primaryBold};
  font-size: ${fontSizes.regular};
  color: ${colors.white};
`;

export const Error = styled.Text`
  margin-top: 6px;
  font-family: ${fonts.primary.primaryRegular};
  font-size: ${fontSizes.smaller};
  color: ${colors.error};
  text-align: ${({align}) => (align ? align : 'left')};
`;