import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GREY_LIGHT,
    borderRadius: spacing.DEFAULT,
  },
  movieItemContainer: {
    gap: spacing.DEFAULT,
    flex: 1,
    flexDirection: 'row',
  },
  textsContainer: {
    paddingVertical: spacing.DEFAULT,
    flex: 1,
    gap: spacing.SMALL,
  },
  nameText: {
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: '600',
  },
  yearText: {
    fontSize: 14,
    color: colors.BLACK,
    fontWeight: '400',
  },
  image: {
    borderRadius: spacing.SMALL,
    width: 80,
    height: 100,
  },
  arrowIcon: {
    tintColor: colors.GREY_LIGHT,
    width: 30,
    height: 30,
  },
});
