import React, {useEffect, useRef} from 'react';
import {TouchableOpacity, Animated, View} from 'react-native';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-native-fontawesome';
import theme from '../../../global/theme';

const {colors} = theme;

function TabIcon(props) {
  const {item, onPress, focused} = props;
  const viewRef = useRef(null);

  // useEffect(() => {
  //   if (focused) {
  //     viewRef.current.animate({
  //       0: {scale: 1},
  //       0.5: {scale: 1.2},
  //       1: {scale: 1},
  //     });
  //   } else {
  //     viewRef.current.animate({
  //       0: {scale: 1},
  //       1: {scale: 1},
  //     });
  //   }
  // }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Animated.View ref={viewRef} duration={1000}>
        <Icon
          icon={item.icon}
          size={20}
          color={focused ? colors.palette.primary : '#CCC'}
        />
      </Animated.View>
    </TouchableOpacity>
  );
}

export default TabIcon;
