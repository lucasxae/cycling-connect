import React, {useCallback} from 'react';
import {View} from 'react-native';
import {Link} from '../../components';
import * as S from './styles';
import {useRoute} from '@react-navigation/native';
import {useAuth} from '../../context/AuthContext';

function DeleteAccount({navigation}) {
  const {onDeleteAccount} = useAuth();
  const route = useRoute();
  const {params} = route;

  const onSubmit = useCallback(async data => {
    try {
      onDeleteAccount(data);
    } catch (err) {
      console.log(err);
      setError('root', [
        {
          type: 'manual',
          message: 'Houve um erro ao alterar a senha.',
        },
      ]);
    }
  }, []);

  return (
    <S.SafeAreaView>
      <S.TouchableWrapper>
        <S.Container>
          <View>
            <S.Header>
              <S.Title>Excluir conta</S.Title>
            </S.Header>
            <S.Subtitle>Tem certeza?</S.Subtitle>
            <S.Description>
              Ao selecionar Confirmar, sua conta não poderá ser mais utilizada -
              isto não pode ser desfeito.
            </S.Description>
            <S.Description>
              Sua conta e todos os dados associados serão excluídos nos próximos
              30 dias e você perderá o acesso aos treinos personalizados e aos
              benefícios que o Cycling Connect oferece.
            </S.Description>
          </View>
          <View>
            <S.CustomButton
              fullWidth={true}
              onPress={() => navigation.goBack()}
              bgColor={'#fff'}>
              <S.ButtonText>Manter conta</S.ButtonText>
            </S.CustomButton>
            <Link
              onPress={() => onSubmit(params.email)}
              color={'#F04444'}
              linkText={'Sim, excluir minha conta'}
              align={'center'}
              mt={20}
              bold
            />
          </View>
        </S.Container>
      </S.TouchableWrapper>
    </S.SafeAreaView>
  );
}

export default DeleteAccount;
