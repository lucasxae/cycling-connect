import styled from 'styled-components/native';
import theme from '../../../global/theme';
import {Animated} from 'react-native';

const {colors} = theme;

export const Container = styled.View`
  position: absolute;
  bottom: 185px;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled(Animated.View)`
  width: 8px;
  height: 8px;
  border-radius: 6px;
  margin-horizontal: 3px;
  background-color: ${({bgColor}) => (bgColor ? bgColor : colors.white)};
`;
