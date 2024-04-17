import React from 'react';
import {View} from 'react-native';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import theme from '../../global/theme';

const {colors} = theme;

function Steps({steps}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15,
      }}>
      {steps.map((step, index) => {
        return (
          <S.ProgressBarWrapper
            key={index}
            firstItem={index === 0}
            lastItem={index === steps.length - 1}>
            <Progress.Bar
              progress={step.progress}
              width={null}
              height={8}
              color={colors.redPalette.primary}
              unfilledColor={colors.secondary.placeholder}
              borderWidth={0}
              animationType={'timing'}
            />
          </S.ProgressBarWrapper>
        );
      })}
    </View>
  );
}

export default Steps;
