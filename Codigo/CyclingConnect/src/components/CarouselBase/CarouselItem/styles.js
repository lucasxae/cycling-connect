import styled from 'styled-components/native';
import CyclingConnect from '../../../assets/images/cc-logo.svg';
import {Animated, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const Container = styled.View`
  align-items: center;
`;

export const Bg = styled.View``;

export const Image = styled(Animated.Image)`
  width: ${width}px;
  height: 100%;
`;

export const Content = styled.View`
  flex: 0.4;
  align-items: center;
`;

export const Logo = styled(CyclingConnect)`
  width: 180px;
  height: 180px;
  position: absolute;
  top: 30px;
`;
