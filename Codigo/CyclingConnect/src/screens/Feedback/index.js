import React, {useCallback, useEffect, useState} from 'react';
import {View, TouchableOpacity, Keyboard} from 'react-native';
import * as S from './styles';

import {faStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as faFilledStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {feedbackSchema} from '../../utils/schemas/schemas';

import {CustomInput} from '../../components';
import MultilineInput from '../../components/Input/MultilineInput';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';

function Feedback({navigation}) {
  const [maxRating] = useState([1, 2, 3, 4, 5]);
  const route = useRoute();
  const {params} = route;

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      nextWeekSuggestions: 5,
      weeklyFeedback: '',
      nextWeekAvailability: '',
    },
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = useCallback(async data => {
    try {
      const newData = {
        nome: 'Ciclista',
        email: params.email,
        nota: data.nextWeekSuggestions,
        disponibilidadeFutura: `${data.nextWeekAvailability} dias`,
        statusFeedback: 'Aprovado',
        details: data.weeklyFeedback,
      };

      console.log(newData);

      const response = await axios.post(
        `http://10.0.2.2:8080/feedback/create`,
        newData,
      );
      if (response.status === 200) {
        navigation.navigate('Home');
      }
    } catch (err) {
      console.log(err);
      setError('root', [
        {
          type: 'manual',
          message: 'Houve um erro ao enviar o feedback.',
        },
      ]);
    }
  }, []);

  const starImageFilled = (
    <FontAwesomeIcon icon={faFilledStar} size={50} color="#F04444" />
  );

  const starImageCorner = (
    <FontAwesomeIcon icon={faStar} size={50} color="#F04444" />
  );

  const Rating = ({rating, onChange}) => {
    return (
      <S.RatingContainer>
        {maxRating.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => onChange(item)}
            style={{marginRight: 10}}>
            {item <= rating ? starImageFilled : starImageCorner}
          </TouchableOpacity>
        ))}
      </S.RatingContainer>
    );
  };

  const onlyNumbers = value => {
    return value.replace(/[^0-9]/g, '');
  };

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <S.Content>
            <View>
              <S.Header>
                <S.Title>Feedback Semanal</S.Title>
                <S.Subtitle>
                  Ei, o quanto você curtiu o seu treino da semana?
                </S.Subtitle>
              </S.Header>
              <Controller
                name="nextWeekSuggestions"
                control={control}
                render={({field: {onChange, value}}) => (
                  <>
                    <Rating rating={value} onChange={onChange} />
                  </>
                )}
              />
              <View>
                <Controller
                  name="weeklyFeedback"
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <MultilineInput
                        label="Conte um pouco mais sobre a sua experiência..."
                        placeholder="Escreva aqui o que você sentiu, suas impressões e o que pode melhorar."
                        hasMargin={true}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        counter={`${200 - value.length} caracteres restantes`}
                      />
                    </>
                  )}
                />
              </View>
              {errors.weeklyFeedback && (
                <S.Error>{errors.weeklyFeedback.message}</S.Error>
              )}
            </View>
            <View style={{marginBottom: 30}}>
              <Controller
                name="nextWeekAvailability"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomInput
                    label="Disponibilidade para a próxima semana"
                    placeholder="1, 2, 3..."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="numeric"
                    maxLength={1}
                  />
                )}
              />
              {errors.nextWeekAvailability && (
                <S.Error>{errors.nextWeekAvailability.message}</S.Error>
              )}
            </View>
            <View>
              <S.CustomButton
                fullWidth={true}
                onPress={handleSubmit(onSubmit)}
                bgColor={'#fff'}
                disabled={!isValid || isSubmitting}>
                <S.ButtonText>Enviar</S.ButtonText>
              </S.CustomButton>
            </View>
          </S.Content>
        </S.Container>
      </S.TouchableWrapper>
      <View height={62} />
    </S.SafeAreaView>
  );
}

export default Feedback;
