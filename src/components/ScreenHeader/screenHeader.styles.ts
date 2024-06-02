import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 16,
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
