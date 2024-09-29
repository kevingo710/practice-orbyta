import React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';

import {useBeerList} from './hooks';
import {Beer} from '../../../domain/entity/Beer';
import BeerItem from '../../components/BeerItem/BeerItem';
import CustomInput from '../../components/CustomInput/CustomInput';
import SelectorOptions from '../../components/SelectorOptions/SelectorOptions'; // Import the new component
import {isValidArray} from './utils';

const ExampleTwoScreen = () => {
  const {
    filteredBeers,
    searchQuery,
    setSearchQuery,
    selectedMalt,
    setSelectedMalt,
    maltOptions,
    refreshBeers,
  } = useBeerList();

  const isLoading = !isValidArray(maltOptions) || !isValidArray(filteredBeers);

  const renderBeerItem = ({item}: {item: Beer}) => <BeerItem item={item} />;

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={'blue'} size={'large'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Refresh Beers 🍻" onPress={refreshBeers} />
      <CustomInput
        label="Text and find your beer:"
        placeholder="Search beers... "
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <SelectorOptions
        options={maltOptions}
        selectedOption={selectedMalt}
        onSelectOption={setSelectedMalt}
      />

      <FlatList
        data={filteredBeers}
        renderItem={renderBeerItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ExampleTwoScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
