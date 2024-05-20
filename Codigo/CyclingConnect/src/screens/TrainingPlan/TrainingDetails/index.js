import React from 'react';
import moment, {min} from 'moment';
import {View, Text, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import BikingIcon from '../../../assets/icons/biking-icon.svg';

import * as S from './styles';
import {FlatList} from 'react-native-gesture-handler';

function TrainingDetails() {
  const route = useRoute();
  const item = route.params;

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

  const formatHour = hour => {
    const [hours, minutes] = hour.split(':');
    if (hours !== '1' && minutes === '00') return `${hours} horas`;
    if (hours === '1' && minutes === '00') return `${hours} hora`;
    if (hours === '1') return `${hours} hora e ${minutes} minutos`;
    return `${hours} horas e ${minutes} minutos`;
  };

  const translationMap = {
    averageSpeed: 'Velocidade média',
    duration: 'Duração',
    intensity: 'Intensidade',
    lapSpeed: 'Velocidade de volta/estímulo',
    suggestedRoute: 'Percurso sugerido',
    totalDistance: 'Distância total',
  };

  const descriptionMap = value => {
    return {
      averageSpeed: `${value} km/h`,
      duration: formatHour(`${value}`),
      intensity: value,
      lapSpeed: value,
      suggestedRoute: value,
      totalDistance: `${value} km`,
    };
  };

  const order = [
    'intensity',
    'totalDistance',
    'duration',
    'averageSpeed',
    'lapSpeed',
    'suggestedRoute',
  ];

  const treino = order.map(key => {
    const value = item[key];
    return {
      id: order.indexOf(key) + 1,
      title: translationMap[key],
      description: descriptionMap(value)[key],
    };
  });

  return (
    <S.SafeAreaView>
      <S.Container>
        <View style={{flex: 1}}>
          <S.Header>
            <BikingIcon />
            <S.HeaderContent>
              <S.Title>Ciclismo</S.Title>
              <S.Subtitle>
                {item.diaSemana.toLowerCase()}, {'\n'}
                {moment(item.date, 'DD/MM/YYYY').format('DD')} de {getMonth()}
              </S.Subtitle>
            </S.HeaderContent>
          </S.Header>
          <View>
            <FlatList
              data={treino}
              style={{flexGrow: 1, marginTop: 20}}
              renderItem={({item}) => (
                <S.TrainingContent>
                  <S.TrainingTitle>{item.title}</S.TrainingTitle>
                  <S.TrainingDescription>
                    {item.description}
                  </S.TrainingDescription>
                </S.TrainingContent>
              )}
              ItemSeparatorComponent={() => <S.Separator />}
            />
          </View>
        </View>
      </S.Container>
    </S.SafeAreaView>
  );
}

export default TrainingDetails;
