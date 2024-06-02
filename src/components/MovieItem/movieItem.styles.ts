import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.GREY_LIGHT,
    borderRadius: 16,
  },
  movieItemContainer: {
    gap: 16,
    flex: 1,
    flexDirection: 'row',
  },
  textsContainer: {
    paddingVertical: 16,
    flex: 1,
    gap: 8,
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
    borderRadius: 8,
    width: 80,
    height: 100,
  },
  arrowIcon: {
    tintColor: colors.GREY_LIGHT,
    width: 30,
    height: 30,
  },
});
