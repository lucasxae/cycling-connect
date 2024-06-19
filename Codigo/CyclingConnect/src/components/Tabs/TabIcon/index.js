import React, {useEffect, useRef} from 'react';
import {TouchableOpacity, Animated, View} from 'react-native';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-native-fontawesome';
import theme from '../../../global/theme';

const {colors} = theme;

function TabIcon(props) {
  const {item, onPress, focused} = props;
  const viewRef = useRef(null);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <Animated.View ref={viewRef} duration={1000}>
        <Icon icon={item.icon} size={20} color={focused ? '#FFF' : '#DDD'} />
      </Animated.View>
    </TouchableOpacity>
  );
}

export default TabIcon;
