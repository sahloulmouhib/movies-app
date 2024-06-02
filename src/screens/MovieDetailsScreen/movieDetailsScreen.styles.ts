import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  innerContainer: {
    gap: 16,
    padding: 16,
    flex: 1,
  },
  movieReleasedDateAndTitleContainer: {
    padding: 16,
    gap: 8,
  },
  imageOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
  },
  imageOverlayStyle: {
    borderRadius: 32,
  },
  movieReleasedDateText: {
    fontSize: 16,
    color: colors.WHITE,
    textAlign: 'center',
    fontWeight: '400',
  },
  movieTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.WHITE,
  },
  image: {
    height: 450,
    width: '100%',
    borderEndEndRadius: 32,
    borderEndStartRadius: 32,
  },
  categoryTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  backButtonContainer: {
    top: 64,
    left: 16,
    backgroundColor: colors.WHITE,
    borderRadius: 30,
    position: 'absolute',
  },
  backIcon: {
    width: 35,
    height: 35,
    tintColor: colors.BLACK,
    transform: [{rotate: '180deg'}],
  },
  categoryContainer: {
    gap: 8,
  },
});
