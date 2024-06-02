import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: spacing.DEFAULT,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  movieItemContainer: {
    gap: spacing.DEFAULT,
    flex: 1,
    flexDirection: 'row',
  },
  textsContainer: {
    flex: 1,
    gap: spacing.SMALL,
  },
  nameText: {
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: '600',
  },
  languageText: {
    fontSize: 14,
    color: colors.BLACK,
    fontWeight: '400',
  },
  image: {
    borderRadius: spacing.SMALL,
    width: 80,
    height: 100,
  },
});
