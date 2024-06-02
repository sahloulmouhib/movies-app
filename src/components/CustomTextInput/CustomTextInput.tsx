import React from 'react';
import {View, TextInput} from 'react-native';

import styles from './customTextInput.styles';
import {colors} from '_utils/colors';

interface CustomTextInputProps {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChangeText,
  text,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={colors.GREY_LIGHT}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
      />
    </View>
  );
};

export default CustomTextInput;
