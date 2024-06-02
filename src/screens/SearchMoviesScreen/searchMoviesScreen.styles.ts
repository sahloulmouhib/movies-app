import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: spacing.DEFAULT,
    gap: 16,
  },
});
