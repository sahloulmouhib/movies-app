import {StyleSheet} from 'react-native';

import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';

export default StyleSheet.create({
  emptyList: {
    padding: spacing.DEFAULT,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: colors.GREY_LIGHT,
    textAlign: 'center',
  },
});
