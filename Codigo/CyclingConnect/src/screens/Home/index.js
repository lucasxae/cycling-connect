import React from 'react';
import {View, Text, Button} from 'react-native';
import * as S from './styles';

function Home({navigation}) {
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
