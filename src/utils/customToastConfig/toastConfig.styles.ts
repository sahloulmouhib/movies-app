import {StyleSheet} from 'react-native';

import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';

export default StyleSheet.create({
  text1: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.WHITE,
  },
  text2: {
    fontSize: 14,
    color: colors.WHITE,
  },
  customToast: {
    gap: spacing.SMALL,
    padding: 20,
    width: '90%',
    backgroundColor: colors.BLACK,
    borderRadius: 8,
    justifyContent: 'center',
  },
  success: {
    width: '90%',
    borderLeftColor: colors.PRIMARY,
  },
  error: {
    borderLeftColor: colors.PRIMARY,
  },
});
