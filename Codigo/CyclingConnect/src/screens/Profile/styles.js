import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native';
import theme from '../../global/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const {colors, fonts, fontSizes} = theme;

export const TouchableWrapper = styled(TouchableWithoutFeedback).attrs({
  flex: 1,
  accessible: false,
})``;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.secondary.background};
`;

// export const Container = styled.View`
//   flex: 1;
//   padding: 0 30px 30px 30px;
//   justify-content: space-between;
// `;
export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  padding: 0 30px 30px 30px;
  justify-content: flex-end;
`;

export const Header = styled.View`
  margin-bottom: 40px;
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

export const Icon = styled(FontAwesomeIcon)``;

// User Information
export const UserInformation = styled.View`
  flex-direction: row;
`;

export const UserImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
`;

export const UserContent = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export const UserName = styled(Subtitle)`
  font-size: ${fontSizes.regular};
`;

export const UserDescription = styled(UserName)`
  font-size: ${fontSizes.small};
`;

// User Options

export const MenuContainer = styled.View``;

export const MenuHeader = styled.View``;

export const MenuTitle = styled(Title)`
  color: ${colors.white};
  font-family: ${fonts.primary.primarySemiBold};
  font-size: ${fontSizes.regular};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #3c3c3c;
`;

export const TitleSeparator = styled(Separator)`
  margin: ${({header}) =>
    header ? '15px -30px 0 -30px' : '0px -30px 0 -30px'};
`;

export const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 11px 0;
`;

export const MenuItemText = styled(Subtitle)`
  font-family: ${fonts.primary.primaryLight};
  font-size: ${fontSizes.regular};
`;

// Logout

export const LogoutContainer = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const LogoutText = styled(Subtitle)`
  font-family: ${fonts.primary.primaryMedium};
  color: ${colors.error};
`;

export const Version = styled(Subtitle)`
  color: ${colors.secondary.separator};
`;
