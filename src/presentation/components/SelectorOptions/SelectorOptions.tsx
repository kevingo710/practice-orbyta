import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface SelectorOptionsProps {
  options: string[];
  selectedOption: string;
  onSelectOption: (option: string) => void;
}

const SelectorOptions: React.FC<SelectorOptionsProps> = ({
  options,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <View>
      <Text style={styles.text}>Filter by malts:</Text>
      <View style={styles.maltFilters}>
        <TouchableOpacity
          style={[styles.maltOption, !selectedOption && styles.selectedMalt]}
          onPress={() => onSelectOption('')}>
          <Text style={styles.text}>All 🌎 </Text>
        </TouchableOpacity>
        {options.map(option => (
          <TouchableOpacity
            key={option}
            style={[
              styles.maltOption,
              selectedOption === option && styles.selectedMalt,
            ]}
            onPress={() => onSelectOption(option)}>
            <Text style={styles.text}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maltFilters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  maltOption: {
    padding: 5,
    margin: 2,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  selectedMalt: {
    backgroundColor: 'lightblue',
  },
  text: {
    color: 'black',
  },
});

export default SelectorOptions;
