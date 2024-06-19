import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import * as S from './styles';
import axios from 'axios';
import moment from 'moment';
import {
  Calendar,
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
  LocaleConfig,
} from 'react-native-calendars';
import {StyleSheet} from 'react-native';
import theme from '../../global/theme';
import {Image} from '../../components/CarouselBase/CarouselItem/styles';

const {fonts, fontSizes, colors} = theme;

function Events({navigation}) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const {params} = route;

  LocaleConfig.locales['br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan.',
      'Fev.',
      'Mar.',
      'Abr.',
      'Mai.',
      'Jun.',
      'Jul.',
      'Ago.',
      'Set.',
      'Out.',
      'Nov.',
      'Dez.',
    ],
    dayNames: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: 'Hoje',
  };

  LocaleConfig.defaultLocale = 'br';

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('EventDetails', item)}>
        <S.Card>
          <S.Content>
            <S.CardTitle>{item.title}</S.CardTitle>
            <S.CardDate>
              {item.date} - {item.dayOfWeek}
            </S.CardDate>
            <S.CardDate>Inscrições: {item.registrationStatus}</S.CardDate>
            <S.Separator />
            <S.CardText>Local: {item.location}</S.CardText>
            <S.CardText>Horário: {item.hour}</S.CardText>
            <S.CardText>Distância: {item.distance}km</S.CardText>
          </S.Content>
        </S.Card>
      </TouchableOpacity>
    );
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      axios
        .get(`http://10.0.2.2:8080/events/getEvents`)
        .then(response => {
          setEvents(response.data);
          setLoading(false);
        })
        .catch(err => console.log('Events error', err));
    }, []),
  );

  moment().format('YYYY-MM-DD');

  const eventFormatted = events.map(event => {
    const date = moment(event.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
    return {
      [date]: [
        {
          id: event.id,
          title: event.title,
          date: event.date,
          location: event.location,
          description: event.description,
          dayOfWeek: event.dayOfWeek,
          hour: event.hour,
          registrationStatus: event.registrationStatus,
          distance: event.distance,
          value: event.value,
        },
      ],
    };
  });

  const mergedEvents = eventFormatted.reduce((acc, cur) => {
    const date = Object.keys(cur)[0];
    if (acc[date]) {
      acc[date].push(...cur[date]);
    } else {
      acc[date] = cur[date];
    }
    return acc;
  }, {});

  console.log(mergedEvents);

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={loading ? {} : mergedEvents}
        renderItem={item => renderItem(item)}
        renderEmptyData={() => {
          return loading ? (
            <View
              style={{
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator
                size="large"
                color={colors.redPalette.primary}
              />
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <S.EmptyText>Não há eventos cadastrados no momento.</S.EmptyText>
            </View>
          );
        }}
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        theme={{
          textDayFontFamily: fonts.primary.primaryRegular,
          textMonthFontFamily: fonts.primary.primaryRegular,
          textDayHeaderFontFamily: fonts.primary.primaryRegular,
          monthTextColor: colors.redPalette.primary,
          agendaTodayColor: colors.redPalette.primary,
          calendarBackground: '#222',
          agendaDayNumColor: colors.redPalette.primary,
          agendaDayTextColor: '#fff',
          dayTextColor: '#fff',
          agendaKnobColor: colors.redPalette.primary,
          selectedDayBackgroundColor: colors.redPalette.primary,
          todayTextColor: '#fff',
          dotColor: colors.redPalette.primary,
          reservationsBackgroundColor: '#333',
        }}
      />
      <View style={{paddingBottom: 90, backgroundColor: '#333'}} />
    </View>
  );
}

export default Events;
