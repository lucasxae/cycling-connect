import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Image, Text, Keyboard, FlatList} from 'react-native';
import {faEdit} from '@fortawesome/free-regular-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';
import {useRoute} from '@react-navigation/native';
import {genderMask, phoneMask} from '../../../utils/masks';

function UserInformation({navigation}) {
  const route = useRoute();
  const {params} = route;
  const userInfo = params?.userInfo;

  const personalData = [
    {
      id: 1,
      title: 'Nome',
      text: params?.userInfo?.login,
    },
    {
      id: 2,
      title: 'Data de nascimento',
      text: params?.userInfo?.birthdate,
    },
    {
      id: 3,
      title: 'Gênero',
      text: genderMask(params?.userInfo?.gender),
    },
    {
      id: 4,
      title: 'Celular',
      text: phoneMask(params?.userInfo?.phone),
    },
  ];

  const accountData = [
    {
      id: 1,
      title: 'Alterar e-mail',
      onPress: () => navigation.navigate('ChangeEmail'),
    },
    {
      id: 2,
      title: 'Alterar senha',
      onPress: () => navigation.navigate('ChangePassword'),
    },
    {
      id: 3,
      title: 'Desativar conta',
      onPress: () =>
        navigation.navigate('DeleteAccount', {email: params?.userInfo?.email}),
    },
  ];

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper onPress={() => Keyboard.dismiss()}>
        <S.Container>
          <View>
            <View>
              <S.Header>
                <S.Title>Dados Pessoais</S.Title>
                <S.UserInformation>
                  <S.UserImage
                    source={require('../../../assets/images/ciclista.jpeg')}
                  />
                </S.UserInformation>
              </S.Header>
            </View>
            <S.MenuContainer>
              <S.MenuHeader>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <S.MenuTitle>Perfil</S.MenuTitle>
                  <S.EditButton
                    onPress={() =>
                      navigation.navigate('UpdateUserInformation', {userInfo})
                    }>
                    <S.EditText>Editar</S.EditText>
                    <S.Icon icon={faEdit} size={13} color={'#EE5D5D'} />
                  </S.EditButton>
                </View>
                <S.TitleSeparator header />
              </S.MenuHeader>
              <FlatList
                data={personalData}
                keyExtractor={item => item.id}
                renderItem={data => (
                  <>
                    <S.MenuWrapper>
                      <S.MenuItemText>{data.item.title}</S.MenuItemText>
                      <S.MenuItemText>{data.item.text}</S.MenuItemText>
                    </S.MenuWrapper>
                  </>
                )}
                ItemSeparatorComponent={<S.Separator />}
              />
              <S.TitleSeparator />
            </S.MenuContainer>
            <S.MenuContainer style={{paddingTop: 30}}>
              <S.MenuHeader>
                <S.MenuTitle>Conta</S.MenuTitle>
                <S.TitleSeparator header />
              </S.MenuHeader>
              <FlatList
                data={accountData}
                keyExtractor={item => item.id}
                renderItem={data => (
                  <S.MenuItem onPress={data.item.onPress}>
                    <S.MenuItemText>{data.item.title}</S.MenuItemText>
                    <S.Icon icon={faChevronRight} size={10} color={'#fff'} />
                  </S.MenuItem>
                )}
                ItemSeparatorComponent={<S.Separator />}
              />
            </S.MenuContainer>
          </View>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default UserInformation;
