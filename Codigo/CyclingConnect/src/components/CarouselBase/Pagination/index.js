import {Dimensions} from 'react-native';
import * as S from './styles';
import React from 'react';

const {width} = Dimensions.get('screen');

const Pagination = ({data, scrollX}) => {
  return (
    <S.Container>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 24, 12],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#fff', '#F04444', '#fff'],
          extrapolate: 'clamp',
        });

        return (
          <S.Dot
            key={idx.toString()}
            style={{width: dotWidth, backgroundColor}}
          />
        );
      })}
    </S.Container>
  );
};

export default Pagination;
