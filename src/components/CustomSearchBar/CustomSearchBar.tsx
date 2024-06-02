import React from 'react';
import {View, Image, TextInput, TouchableOpacity} from 'react-native';

import {colors} from '_utils/colors';
import {icons} from '_utils/icons';

import styles from './customSearchBarStyles.phone';

interface CustomSearchBarProps {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  defaultValue?: string;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  defaultValue,
  onChangeText,
  placeholder,
  text,
}) => {
  const onClear = () => {
    onChangeText('');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.loopIcon} resizeMode="contain" source={icons.LOOP} />
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={onChangeText}
        placeholderTextColor={colors.GREY_LIGHT}
        placeholder={placeholder}
        defaultValue={defaultValue}
        cursorColor={colors.PRIMARY}
      />

      <TouchableOpacity
        disabled={text?.length === 0}
        style={text?.length === 0 ? styles.zeroOpacity : {}}
        onPress={onClear}>
        <Image
          style={styles.closeIcon}
          resizeMode="contain"
          source={icons.CLOSE}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomSearchBar;
