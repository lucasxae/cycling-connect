import styled from 'styled-components/native';
import {OtpInput} from 'react-native-otp-entry';
import theme from '../../../global/theme';

const {colors, fonts, fontSizes} = theme;

export const Label = styled.Text`
  font-family: ${fonts.secondary.secondaryMedium};
  font-size: ${fontSizes.medium};
  color: ${colors.white};
  margin-bottom: 6px;
`;

export const OTPInput = styled(OtpInput).attrs({
  numberOfDigits: 4,
  focusColor: colors.white,
  theme: {
    pinCodeContainerStyle: {
      width: 65,
      height: 80,
      backgroundColor: colors.secondary.input,
      borderWidth: 0,
    },
    pinCodeTextStyle: {
      color: colors.white,
      fontFamily: fonts.primary.primaryMedium,
      fontSize: 36,
    },
    focusedPinCodeContainerStyle: {
      backgroundColor: colors.secondary.focusedInput,
    },
  },
})``;
