import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: spacing.DEFAULT,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: spacing.DEFAULT,
    backgroundColor: colors.WHITE,
  },
  titleText: {
    fontSize: 22,
    flex: 1,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  hiddenIconContainer: {
    opacity: 0,
  },
});
