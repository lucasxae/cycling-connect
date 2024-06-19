import React, {useState, useCallback} from 'react';
import axios from 'axios';
import {useAuth} from '../../context/AuthContext';
import {View, Keyboard, FlatList} from 'react-native';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import * as S from './styles';

function Profile({navigation}) {
  const {onLogout} = useAuth();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState();
  const {params} = route;

  console.log('Dados', params);

  const menu = [
    {
      id: 1,
      title: 'Dados Pessoais',
      onPress: () =>
        navigation.navigate('UserInformation', {
          userInfo,
        }),
    },
    {
      id: 2,
      title: 'Zonas',
      onPress: () => console.log('Zonas'),
    },
    {
      id: 3,
      title: 'Métricas',
      onPress: () => console.log('Métricas'),
    },
  ];

  useFocusEffect(
    useCallback(() => {
      axios
        .get(`http://10.0.2.2:8080/auth/findByEmail/${params.props.email}`)
        .then(response => {
          setUserInfo(response.data);
          console.log('response', response.data);
        })
        .catch(err => console.log('Profile Error', err));
    }, []),
  );

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container style={{flex: 1}}>
          <S.Content>
            <View>
              <View>
                <S.Header>
                  <S.Title>Configurações</S.Title>
                  <S.UserInformation>
                    <S.UserImage
                      source={require('../../assets/images/user-icon.png')}
                    />
                    <S.UserContent>
                      <S.UserName>{userInfo?.login}</S.UserName>
                      <S.UserDescription>Ciclista</S.UserDescription>
                    </S.UserContent>
                  </S.UserInformation>
                </S.Header>
              </View>
              <S.MenuContainer>
                <S.MenuHeader>
                  <S.MenuTitle>Conta Cycling Connect</S.MenuTitle>
                  <S.TitleSeparator header />
                </S.MenuHeader>
                <FlatList
                  data={menu}
                  keyExtractor={item => item.id}
                  renderItem={(data, index) => (
                    <>
                      <S.MenuItem onPress={data.item.onPress}>
                        <S.MenuItemText>{data.item.title}</S.MenuItemText>
                        <S.Icon
                          icon={faChevronRight}
                          size={12}
                          color={'#fff'}
                        />
                      </S.MenuItem>
                    </>
                  )}
                  ItemSeparatorComponent={<S.Separator />}
                />
                <S.TitleSeparator />
              </S.MenuContainer>
              <S.MenuContainer style={{paddingTop: 30}}>
                <S.MenuHeader>
                  <S.MenuTitle>Conexões de Aplicativos</S.MenuTitle>
                  <S.TitleSeparator header />
                </S.MenuHeader>
                <FlatList
                  data={[
                    {
                      id: 1,
                      title: 'Strava',
                      onPress: () => console.log('Strava'),
                    },
                  ]}
                  keyExtractor={item => item.id}
                  renderItem={({item}) => (
                    <S.MenuItem onPress={item.onPress}>
                      <S.MenuItemText>{item.title}</S.MenuItemText>
                      <S.Icon icon={faChevronRight} size={10} color={'#fff'} />
                    </S.MenuItem>
                  )}
                />
                <S.TitleSeparator />
              </S.MenuContainer>
            </View>
            <View>
              <S.LogoutContainer>
                <S.LogoutButton onPress={onLogout}>
                  <S.LogoutText>Sair da conta</S.LogoutText>
                </S.LogoutButton>
                <S.Version>V0.1.0</S.Version>
              </S.LogoutContainer>
            </View>
          </S.Content>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default Profile;
