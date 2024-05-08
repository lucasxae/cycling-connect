import React from 'react';
import {View, Button, Text} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import * as S from './styles';

function Home({navigation}) {
  const {onLogout} = useAuth();

  return (
    <S.SafeAreaView>
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <Text>Olá, fulano!</Text>
        <Button title="Sair" onPress={onLogout} />
      </View>
    </S.SafeAreaView>
  );
}

export default Home;
