import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.BLACK,
  },
  icon: {
    width: 25,
    height: 25,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
