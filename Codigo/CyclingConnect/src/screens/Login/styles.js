import styled from 'styled-components/native';
import theme from '../../global/theme';

const {colors} = theme;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.primary};
`;
