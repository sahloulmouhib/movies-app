import {colors} from '_utils/colors';
import {IS_IOS} from '_utils/helpers';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: IS_IOS ? 16 : 0,
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.BLACK,
    borderRadius: 8,
  },
  textInput: {
    fontSize: 16,
    color: colors.BLACK,
  },
});
