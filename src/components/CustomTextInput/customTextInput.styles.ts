import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {IS_IOS} from '_utils/helpers';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: spacing.DEFAULT,
    paddingVertical: IS_IOS ? spacing.DEFAULT : 0,
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.BLACK,
    borderRadius: spacing.SMALL,
  },
  textInput: {
    fontSize: 16,
    color: colors.BLACK,
  },
});
