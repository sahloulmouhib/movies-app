import {StyleSheet} from 'react-native';

import {colors} from '_utils/colors';

export default StyleSheet.create({
  container: {
    maxWidth: 200,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.GREY_LIGHT,
    backgroundColor: colors.WHITE,
    borderRadius: 55 / 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 4,
  },
  icon: {
    width: 14,
    height: 14,
    tintColor: colors.BLACK,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 14,
    color: colors.BLACK,
  },
});
