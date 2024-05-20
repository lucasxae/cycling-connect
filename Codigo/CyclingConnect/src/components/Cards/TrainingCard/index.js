import React from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';
import * as S from './styles';

function TrainingCard({onPress, ...item}) {
  const getMonth = () => {
    moment.locale('pt');

    moment.updateLocale('pt', {
      months: [
        'janeiro',
        'fevereiro',
        'março',
        'abril',
        'maio',
        'junho',
        'julho',
        'agosto',
        'setembro',
        'outubro',
        'novembro',
        'dezembro',
      ],
    });
    return moment(item.date, 'DD/MM/YYYY').format('MMMM');
  };

  return (
    <S.Card onPress={onPress}>
      <S.LeftPart>
        <S.Day>{item.diaSemana.toLowerCase().slice(0, 3)}</S.Day>
        <S.Number>{moment(item.date, 'DD/MM/YYYY').format('DD')}</S.Number>
        <S.Month>{getMonth().slice(0, 3)}</S.Month>
      </S.LeftPart>
      <S.RightPart>
        <S.Title>Ciclismo</S.Title>
        <S.Subtitle>{item.intensity}</S.Subtitle>
        <S.Description>
          Distância total de {item.totalDistance} km por {item.duration},
          velocidade média de {item.averageSpeed} km/h,{' '}
          {item.lapSpeed.charAt(0).toLowerCase() + item.lapSpeed.slice(1)}...
        </S.Description>
      </S.RightPart>
    </S.Card>
  );
}

export default TrainingCard;
