import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const DotContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  bottom: 50px;
`;

export const Dot = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: red;
  margin: 0 3px;
`;
