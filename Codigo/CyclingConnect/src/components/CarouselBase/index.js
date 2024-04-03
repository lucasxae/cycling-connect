import {Animated, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import CarouselItem from './CarouselItem';
import Pagination from './Pagination';
import CyclingConnect from '../../assets/images/cc-logo.svg';

const CarouselBase = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const Slides = [
    {
      id: 1,
      img: require('../../assets/images/biking2.jpg'),
      title: 'Bicicleta 1',
      description: 'Descrição 1',
    },
    {
      id: 2,
      img: require('../../assets/images/biking4.jpg'),
      title: 'Bicicleta 2',
      description: 'Descrição 2',
    },
    {
      id: 3,
      img: require('../../assets/images/biking6.jpg'),
      title: 'Bicicleta 3',
      description: 'Descrição 3',
    },
  ];

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
        data={Slides}
        renderItem={({item}) => <CarouselItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />
    </View>
  );
};

export default CarouselBase;

const styles = StyleSheet.create({});
