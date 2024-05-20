import React, {useState} from 'react';
import {View, TouchableOpacity, Keyboard} from 'react-native';
import * as S from './styles';

import {faStar} from '@fortawesome/free-regular-svg-icons';
import {faStar as faFilledStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {feedbackSchema} from '../../utils/schemas/schemas';

import {CustomInput} from '../../components';

function Feedback() {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating] = useState([1, 2, 3, 4, 5]);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting, isValid},
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      feedback: '',
    },
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  const starImageFilled = (
    <FontAwesomeIcon icon={faFilledStar} size={50} color="#F04444" />
  );

  const starImageCorner = (
    <FontAwesomeIcon icon={faStar} size={50} color="#F04444" />
  );

  const Rating = () => {
    return (
      <S.RatingContainer>
        {maxRating.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() => setDefaultRating(item)}>
              {item <= defaultRating ? starImageFilled : starImageCorner}
            </TouchableOpacity>
          );
        })}
      </S.RatingContainer>
    );
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
                  Ei fulano, o quanto você curtiu o treino da semana?
                </S.Subtitle>
              </S.Header>
              <Rating />
              <Controller
                name="feedback"
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <CustomInput
                    teste={true}
                    label="Conte um pouco mais sobre a sua experiência... "
                    placeholder="Escreva aqui o que você sentiu, suas impressões e o que pode melhorar."
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.feedback && <S.Error>{errors.feedback.message}</S.Error>}
            </View>
          </S.Content>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default Feedback;
