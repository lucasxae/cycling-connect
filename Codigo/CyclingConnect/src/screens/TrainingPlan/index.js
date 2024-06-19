import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import * as S from './styles';
import {TrainingCard} from '../../components';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

function TrainingPlan({navigation}) {
  const [planilhaTreino, setPlanilhaTreino] = useState([]);
  const route = useRoute();
  const {params} = route;

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`http://10.0.2.2:8080/exercise/getWeeklyExercise/${params.email}`)
        .then(response => {
          setPlanilhaTreino(response.data);
          console.log('response', response.data);
        })
        .catch(err => console.log('Planilha Error', err));
    }, []),
  );

  return (
    <S.SafeAreaView>
      <S.Container>
        <View style={{flex: 1}}>
          <S.Header>
            <S.Title>Planilha Semanal</S.Title>
          </S.Header>
          <View>
            <FlatList
              data={planilhaTreino}
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
              ListEmptyComponent={() => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#fff',
                      textAlign: 'center',
                    }}>
                    Ops! Parece que você ainda não tem nenhum treino cadastrado.
                  </Text>
                </View>
              )}
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
