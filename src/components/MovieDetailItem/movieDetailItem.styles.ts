import {StyleSheet} from 'react-native';

import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';

export default StyleSheet.create({
  container: {
    maxWidth: 200,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.GREY_LIGHT,
    backgroundColor: colors.WHITE,
    borderRadius: 55 / 2,
    paddingVertical: spacing.XSMALL,
    paddingHorizontal: spacing.SMALL,
    gap: spacing.XSMALL,
  },
  icon: {
    width: 14,
    height: 14,
    tintColor: colors.BLACK,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 14,
    color: colors.BLACK,
  },
});
