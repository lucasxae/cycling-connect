import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';
import CyclingConnect from '../../../assets/images/cc-logo.svg';

const width = Dimensions.get('window').width;

const CarouselItem = ({item}) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Animated.Image
          source={item.img}
          resizeMode="cover"
          style={[styles.image]}
        />
      </View>
      <CyclingConnect
        width={180}
        height={180}
        style={{position: 'absolute', top: '20'}}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  bg: {
    backgroundColor: '#F03C24',
  },
  image: {
    width,
    height: 550,
    opacity: 0.7,
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: '#333',
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
