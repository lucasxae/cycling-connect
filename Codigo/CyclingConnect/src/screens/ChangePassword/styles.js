import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const KeyboardWrapper = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.primary};
`;

export const Container = styled.View`
  flex: 1;
  padding: 40px 30px 30px;
  background-color: ${colors.background.primary};
`;
