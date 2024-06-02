import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    padding: spacing.DEFAULT,
    gap: spacing.SMALL,
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: spacing.SMALL,
    flexDirection: 'row',
  },
  titleText: {
    flex: 1,
    fontSize: 20,
    color: colors.PRIMARY,
  },
  icon: {
    tintColor: colors.PRIMARY,
  },
});
