import {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import * as S from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

function SquareCheckbox({children, label, onSelect}) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    onSelect && onSelect(!selected);
  };

  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.Content>
        <S.ButtonContainer>
          <TouchableOpacity onPress={() => handleSelect()}>
            <S.Checkbox isSelected={selected}>
              {selected && (
                <FontAwesomeIcon icon={faCheck} size={12} color={'#fff'} />
              )}
            </S.Checkbox>
          </TouchableOpacity>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
}

export default SquareCheckbox;
