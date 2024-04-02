import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const Container = styled.View`
  width: ${width}px;
  height: ${height}px;
  align-items: center;
`;

export const Image = styled.Image`
  flex: 0.6;
  width: 100%;
`;

export const DescriptionContainer = styled.View``;

export const Title = styled.Text`
  font-weight: 800;
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
  color: #000;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  color: #000;
  padding: 0 20px;
`;
