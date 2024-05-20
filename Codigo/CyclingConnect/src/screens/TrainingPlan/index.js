import React from 'react';
import {View, Text} from 'react-native';
import * as S from './styles';
import {TrainingCard} from '../../components';
import {FlatList} from 'react-native-gesture-handler';

function TrainingPlan({navigation}) {
  const treinos = [
    {
      id: 1,
      lapSpeed: '40x10min em 80% FCMax',
      suggestedRoute: 'Parque da cidade, plano',
      duration: '1:00',
      averageSpeed: 20,
      totalDistance: 20,
      intensity: 'Recuperação (60-70%)',
      status: 'PENDENTE',
      date: '20/05/2024',
      diaSemana: 'Segunda-feira',
    },
    {
      id: 2,
      lapSpeed: 'Mantenha ritmo constante',
      suggestedRoute: 'Estrada com leves subidas',
      duration: '1:30',
      averageSpeed: 20,
      totalDistance: 30,
      intensity: 'Moderada (70-80%)',
      status: 'PENDENTE',
      date: '22/05/2024',
      diaSemana: 'Quarta-feira',
    },
    {
      id: 3,
      lapSpeed: 'Recuperação ativa',
      suggestedRoute: 'Ciclovia, rota plana',
      duration: '1:10',
      averageSpeed: 22,
      totalDistance: 25,
      intensity: 'Leve (50-60%)',
      status: 'PENDENTE',
      date: '24/05/2024',
      diaSemana: 'Sexta-feira',
    },
    {
      id: 4,
      lapSpeed: '2x20min em 85% FCMax',
      suggestedRoute: 'Rota com subidas',
      duration: '2:00',
      averageSpeed: 20,
      totalDistance: 40,
      intensity: 'Alta (80-90%)',
      status: 'PENDENTE',
      date: '25/05/2024',
      diaSemana: 'Sábado',
    },
    {
      id: 5,
      lapSpeed: '5x5min em 90% FCMax',
      suggestedRoute: 'Estrada mista',
      duration: '1:45',
      averageSpeed: 20,
      totalDistance: 35,
      intensity: 'Moderada (70-80%)',
      status: 'PENDENTE',
      date: '26/05/2024',
      diaSemana: 'Domingo',
    },
  ];

  return (
    <S.SafeAreaView>
      <S.Container>
        <View style={{flex: 1}}>
          <S.Header>
            <S.Title>Planilha Semanal</S.Title>
          </S.Header>
          <View>
            <FlatList
              data={treinos}
              renderItem={({item}) => (
                <TrainingCard
                  key={item.id}
                  lapSpeed={item.lapSpeed}
                  suggestedRoute={item.suggestedRoute}
                  duration={item.duration}
                  averageSpeed={item.averageSpeed}
                  totalDistance={item.totalDistance}
                  intensity={item.intensity}
                  date={item.date}
                  diaSemana={item.diaSemana}
                  onPress={() => navigation.navigate('TrainingDetails', item)}
                />
              )}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={() => <View style={{paddingBottom: 100}} />}
              style={{flexGrow: 1}}
            />
          </View>
        </View>
      </S.Container>
    </S.SafeAreaView>
  );
}

export default TrainingPlan;
