import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import * as S from './styles';

function CircleCheckbox({options, onSelect, label}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = option => {
    if (selectedOption === option) {
      return;
    } else {
      setSelectedOption(option);
      onSelect(option);
    }
  };

  return (
    <View>
      {label && <S.Label>{label}</S.Label>}
      <S.Content>
        {options.map(option => (
          <TouchableOpacity
            key={option.value}
            onPress={() => handleSelectOption(option.value)}>
            <S.Container>
              <S.Checkbox isSelected={selectedOption === option.value}>
                {selectedOption === option.value && <S.CheckMark />}
              </S.Checkbox>
              <S.CheckboxText>{option.name}</S.CheckboxText>
            </S.Container>
          </TouchableOpacity>
        ))}
      </S.Content>
    </View>
  );
}

export default CircleCheckbox;
