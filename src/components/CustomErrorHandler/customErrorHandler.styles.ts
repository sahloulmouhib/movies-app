import {StyleSheet} from 'react-native';

import {colors} from '_utils/colors';
import {spacing} from '_utils/constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: spacing.DEFAULT,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    color: colors.PRIMARY,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 25,
  },
  buttonContainer: {
    backgroundColor: colors.PRIMARY,
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 16,
  },
});
