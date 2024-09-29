import React from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';

interface CustomInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  keyboardType?: TextInputProps['keyboardType'];
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChangeText,
  placeholder = 'Enter text',
  keyboardType = 'default',
  label = 'default',
}) => {
  return (
    <View>
      {label ? <Text style={styles.labelText}>{label}</Text> : <></>}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        style={styles.input}
        placeholderTextColor={'#ccc'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  labelText: {
    color: 'black'
  }
});

export default CustomInput;
