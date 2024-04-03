import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.primary};
`;

export const Container = styled.View`
  flex: 1;
  padding: 30px 30px 50px 30px;
  justify-content: flex-end;
`;
