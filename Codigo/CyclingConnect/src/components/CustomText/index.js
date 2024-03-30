import React from 'react';
import {View} from 'react-native';
import * as S from './styles';

function CustomText({children, ...props}) {
  return (
    <View>
      <S.Text
        align={props.align}
        color={props.color}
        size={props.size}
        lineHeight={props.lineHeight}
        marginBottom={props.marginBottom}>
        {children}
      </S.Text>
    </View>
  );
}

export default CustomText;
