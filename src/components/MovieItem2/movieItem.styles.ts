import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    gap: spacing.DEFAULT,
    padding: spacing.DEFAULT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    textAlignVertical: 'top',
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.BLACK,
  },
  addIcon: {
    tintColor: colors.PRIMARY,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
