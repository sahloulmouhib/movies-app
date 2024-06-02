import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  errorMessage: {
    color: colors.PRIMARY,
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
  },
});
