import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.secondary.background};
`;

export const Container = styled.View`
  flex: 1;
  padding: 30px 30px 50px 30px;
  justify-content: flex-end;
`;

export const Content = styled.View`'
  poisition: absolute;
  top: 0;
  bottom: 0;
  left: 10;
  right: 10;
`;
