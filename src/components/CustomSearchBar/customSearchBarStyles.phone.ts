import {StyleSheet} from 'react-native';

import {colors} from '_utils/colors';
import {IS_IOS} from '_utils/helpers';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 16,
    paddingVertical: IS_IOS ? 16 : 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    gap: 12,
    borderColor: colors.GREY_LIGHT,
  },
  zeroOpacity: {opacity: 0},
  closeIcon: {
    width: 20,
    height: 20,
    tintColor: colors.BLACK,
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'center',
    color: colors.BLACK,
  },
  loopIcon: {
    width: 20,
    height: 20,
    tintColor: colors.BLACK,
  },
});
