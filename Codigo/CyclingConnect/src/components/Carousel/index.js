import React, {useRef, useState} from 'react';
import * as S from './styles';
import {FlatList, View, Text, Animated} from 'react-native';
import CarouselItem from './CarouselItem';

function Carousel({data}) {
  const flatlistRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentSlide, setCurrentSlide] = useState(0);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentSlide(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <S.Container>
      <S.Carousel>
        <FlatList
          ref={flatlistRef}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CarouselItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
        />
      </S.Carousel>
    </S.Container>
  );
}

export default Carousel;
