import React from 'react';
import {View, ScrollView} from 'react-native';

import styles from './homeScreenStyles';

import {type NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  HOME_SCREEN,
  POKEMON_STACK,
  TV_SHOWS_STACK,
  TV_SHOWS_HOME_SCREEN,
  POKEMON_LIST_SCREEN,
  POKEMON_DETAILS_SCREEN,
} from '_utils/screenNames';
import CustomButton from '_components/CustomButton/CustomButton';
import ScreenHeader from '_components/ScreenHeader/ScreenHeader';
import {icons} from '_utils/icons';
import {translate} from '_i18n';
import {HomeStackParamList} from '_navigation/HomeStackNaigation/HomeStackNavigation';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import {spacing} from '_utils/constants';

interface HomeScreenProps
  extends NativeStackScreenProps<HomeStackParamList, typeof HOME_SCREEN> {}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}): JSX.Element => {
  const navigateToTvShows = () => {
    navigation.navigate(TV_SHOWS_STACK, {
      screen: TV_SHOWS_HOME_SCREEN,
    });
  };
  const navigateToPokemonList = () => {
    navigation.navigate(POKEMON_STACK, {
      screen: POKEMON_LIST_SCREEN,
    });
  };
  const navigateToPokemonDetails = () => {
    navigation.navigate(POKEMON_STACK, {
      screen: POKEMON_DETAILS_SCREEN,
    });
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title={translate('home.title')} />
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <CustomButton
          title={translate('home.tv_shows')}
          onPress={navigateToTvShows}
          rightIcon={icons.SMALL_ARROW}
        />
        <CustomDivider height={spacing.LARGE} />
        <CustomButton
          title={translate('home.pokemon_list')}
          onPress={navigateToPokemonList}
          rightIcon={icons.SMALL_ARROW}
        />
        <CustomButton
          title={translate('home.pokemon_details')}
          onPress={navigateToPokemonDetails}
          rightIcon={icons.SMALL_ARROW}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
