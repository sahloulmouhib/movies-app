import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: spacing.DEFAULT,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: spacing.DEFAULT,
    backgroundColor: colors.WHITE,
  },
  titleText: {
    fontSize: 20,
    flex: 1,
    color: colors.BLACK,
    textAlign: 'center',
  },
  hiddenIconContainer: {
    opacity: 0,
  },
});
