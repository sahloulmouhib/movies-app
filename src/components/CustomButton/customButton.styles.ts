import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.PRIMARY,
    borderRadius: 8,
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
