import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Beer} from '../../../domain/entity/Beer';

interface BeerItemProps {
  item: Beer;
}

const BeerItem = ({item}: BeerItemProps) => {
  const getAlcoholColor = (alcohol: string) => {
    const percentage = parseFloat(alcohol);
    if (percentage <= 5) return 'green';
    if (percentage <= 10) return 'yellow';
    return 'red';
  };

  return (
    <View style={styles.beerItem}>
      <View
        style={[
          styles.alcoholDot,
          {backgroundColor: getAlcoholColor(item.alcohol)},
        ]}
      />
      <View style={styles.beerInfo}>
        <Text style={styles.beerName}>{item.name}</Text>
        <Text style={styles.textBeer}>Brand: {item.brand}</Text>
        <Text style={styles.textBeer}>Hop: {item.hop}</Text>
      </View>
    </View>
  );
};

export default BeerItem;

const styles = StyleSheet.create({
  beerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  alcoholDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  beerInfo: {
    flex: 1,
  },
  beerName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  textBeer: {
    color: 'black',
  },
});
