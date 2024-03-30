import React from 'react';
import {View} from 'react-native';
import * as S from './styles';

function Text({text, size, lineHeight, color, align, marginBottom}) {
  return (
    <View>
      <S.Text
        align={align}
        color={color}
        size={size}
        lineHeight={lineHeight}
        marginBottom={marginBottom}>
        {text}
      </S.Text>
    </View>
  );
}

export default Text;
