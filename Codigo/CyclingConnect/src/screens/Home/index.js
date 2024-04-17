import React from 'react';
import {View, Text, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';
import * as S from './styles';

function Home({navigation}) {
  const route = useRoute();
  const {params} = route;

  console.log('Teste', params);
  return (
    <S.SafeAreaView>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <Button
          title={'Alterar senha'}
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
        />
      </View>
    </S.SafeAreaView>
  );
}

export default Home;
