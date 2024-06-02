import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  noResultsIcon: {
    height: 80,
    width: 80,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.BLACK,
  },
  descriptionText: {
    fontSize: 14,
    color: colors.BLACK,
  },
});
