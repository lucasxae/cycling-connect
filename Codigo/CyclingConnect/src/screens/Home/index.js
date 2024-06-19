import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Keyboard,
  Linking,
  Image,
} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import * as S from './styles';
import {Link, useFocusEffect, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {CustomText, Separator, TrainingCard} from '../../components';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import WhatsappIcon from '../../assets/icons/baseline-whatsapp.svg';
import {
  faAnchor,
  faHeartPulse,
  faMessage,
  faCalendar,
  faList,
  faL,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {
  faCalendarAlt,
  faCalendarCheck,
  faCalendarDays,
} from '@fortawesome/free-regular-svg-icons';

function Home({navigation}) {
  const route = useRoute();
  const params = route.params;
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [treinos, setTreinos] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      setTimeout(() => {
        axios
          .get(`http://10.0.2.2:8080/auth/findByEmail/${params.email}`)
          .then(response => {
            setUserInfo(response.data);
            setLoading(false);
          })
          .catch(err => console.log('Error', err))
          .finally(() => setLoading(false));
      }, 500);
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`http://10.0.2.2:8080/exercise/getWeeklyExercise/${params.email}`)
        .then(response => {
          setTreinos(response.data);
          console.log('response', response.data);
        })
        .catch(err => console.log('Planilha Error', err));
    }, []),
  );

  const categories = [
    {
      id: 1,
      icon: faList,
      navigation: 'TrainingPlan',
      name: 'Meus treinos',
    },
    {
      id: 2,
      navigation: 'Events',
      icon: faCalendar,
      name: 'Eventos',
    },
    {
      id: 3,
      navigation: 'Feedback',
      icon: faMessage,
      name: 'Feedback',
    },
    {
      id: 4,
      navigation: 'Profile',
      icon: faHeartPulse,
      name: 'Perfil',
    },
  ];

  getCurrentDayOfWeek = () => {
    moment.locale('pt');

    moment.updateLocale('pt', {
      weekdays: [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
      ],
    });
    return moment().format('dddd');
  };

  const renderCardTreinoDoDia = () => {
    return treinos.map(item => {
      if (item.date === moment().format('DD/MM/YYYY')) {
        return (
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
            hide
          />
        );
      }
    });
  };

  const challenges = [
    {
      id: 1,
      navigate: () =>
        Linking.openURL('https://www.youtube.com/watch?v=il5vPB3o1WM'),
      image: require('../../assets/images/biking5.jpg'),
    },
    {
      id: 2,
      navigate: () =>
        Linking.openURL('https://www.youtube.com/watch?v=tDLHIES8mLc'),
      image: require('../../assets/images/biking2.jpg'),
    },
    {
      id: 3,
      navigate: () =>
        Linking.openURL('https://www.youtube.com/watch?v=Vblm7o-Rcsw'),
      image: require('../../assets/images/biking3.jpg'),
    },
    {
      id: 4,
      navigate: () =>
        Linking.openURL('https://www.youtube.com/watch?v=zI0xTAQpJGM'),
      image: require('../../assets/images/biking4.jpg'),
    },
  ];

  return (
    <>
      <S.SafeAreaView>
        <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
          <S.Container>
            <S.Content>
              {loading ? (
                <ActivityIndicator size={50} color={'#F04444'} />
              ) : (
                <View style={{flex: 1, justifyContent: 'flex-start'}}>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <CustomText bold color={'#fff'} align={'left'}>
                        Olá, {userInfo?.login}!
                      </CustomText>

                      <View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Profile')}>
                          <FontAwesomeIcon
                            icon={faCog}
                            size={20}
                            color="#fff"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        size={16}
                        color="#fff"
                      />
                      <CustomText bold color={'#fff'} align={'left'} mh={10}>
                        {getCurrentDayOfWeek() +
                          ', ' +
                          moment().format('DD/MM/YYYY')}
                      </CustomText>
                    </View>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {categories.map(category => (
                      <S.CategoryContainer
                        key={category.id}
                        onPress={() =>
                          navigation.navigate(category.navigation)
                        }>
                        <FontAwesomeIcon
                          icon={category.icon}
                          size={20}
                          color="#fff"
                        />
                        <CustomText color={'#fff'} mv={5} bold>
                          {category.name}
                        </CustomText>
                      </S.CategoryContainer>
                    ))}
                  </ScrollView>
                  <S.Title>Treino do dia</S.Title>
                  {renderCardTreinoDoDia()}
                  <S.Separator />
                  <View style={{marginTop: 20, marginBottom: 30}}>
                    <CustomText bold color={'#fff'} align={'left'} size={20}>
                      Perfil de Ciclista
                    </CustomText>
                    <View style={{alignItems: 'center'}}>
                      <CustomText
                        color={'#fff'}
                        align={'center'}
                        size={16}
                        mv={15}
                        mb={15}>
                        Responda um pequeno questionário para traçar o seu
                        perfil de ciclista e acelerar os seus treinos.
                      </CustomText>
                      <S.CustomButton
                        onPress={console.log('teste')}
                        bgColor={'#fff'}>
                        <S.ButtonText>Responder questionário</S.ButtonText>
                      </S.CustomButton>
                      <CustomText
                        color={'#fff'}
                        align={'left'}
                        size={16}
                        mv={15}
                        mb={15}>
                        Ainda precisa de ajuda?
                      </CustomText>
                      <S.CustomButton
                        onPress={() =>
                          Linking.openURL(
                            'https://www.instagram.com/pedrocyclist',
                          )
                        }
                        bgColor={'#fff'}>
                        <WhatsappIcon style={{marginRight: 5}} />
                        <S.ButtonText>Fale com o Pedro</S.ButtonText>
                      </S.CustomButton>
                    </View>
                  </View>
                  <S.Separator />
                  <S.Title>Desafios do Barbosa</S.Title>
                  <View>
                    <CustomText color={'#fff'} align={'left'} size={16} mb={15}>
                      Para ir além.
                    </CustomText>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {challenges.map(challenge => (
                      <TouchableOpacity onPress={challenge.navigate}>
                        <View key={challenge.id} style={{marginRight: 20}}>
                          <S.CardImage source={challenge.image} />
                          <CustomText color={'#fff'} bold align="left" mv={10}>
                            Desafio #{challenge.id}
                          </CustomText>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              )}
            </S.Content>
          </S.Container>
        </S.TouchableWrapper>
      </S.SafeAreaView>
    </>
  );
}

export default Home;
