import React, {useRef, useState} from 'react';
import {Animated, FlatList, View} from 'react-native';
import CarouselItem from './CarouselItem';
import Pagination from './Pagination';
import CyclingConnect from '../../assets/images/cc-logo.svg';
import {slides} from './slides';

const CarouselBase = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <CyclingConnect
        width={150}
        height={150}
        style={{position: 'absolute', top: '50'}}
      />
      <FlatList
        data={slides}
        renderItem={({item}) => <CarouselItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slides} scrollX={scrollX} index={index} />
    </View>
  );
};

export default CarouselBase;
