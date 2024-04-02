import React, {useRef} from 'react';
import * as S from './styles';
import {Animated} from 'react-native';
import CarouselItem from './CarouselItem';
import {Dimensions} from 'react-native';
import Pagination from './Pagination';
import Carousel from 'react-native-reanimated-carousel';

function CustomCarousel({data}) {
  const width = Dimensions.get('window').width;

  return (
    <S.Container>
      <S.Carousel>
        <Carousel
          loop
          width={width}
          pagingEnabled
          data={data}
          scrollAnimationDuration={1000}
          renderItem={({item}) => <CarouselItem item={item} />}
        />
      </S.Carousel>
    </S.Container>
  );
}

export default CustomCarousel;
