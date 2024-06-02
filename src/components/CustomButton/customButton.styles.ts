import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: spacing.DEFAULT,
    gap: spacing.SMALL,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: spacing.SMALL,
    flexDirection: 'row',
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: colors.WHITE,
  },
  icon: {
    tintColor: colors.PRIMARY,
  },
});
