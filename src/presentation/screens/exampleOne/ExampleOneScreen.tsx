import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSandclockFigure} from './hooks';
import CustomInput from '../../components/CustomInput/CustomInput';
import { isFigureEmpty } from './utils';

const ExampleOneScreen = () => {
  const {
    numberOfAsterisk,
    setNumberOfAsterisk,
    figure,
    rotation,
    createSandclockFigure,
    rotateFigure,
  } = useSandclockFigure();



  return (
    <ScrollView style={styles.container}>
      <CustomInput 
        label='Enter a integer digit:'
        placeholder="Enter number of asterisks"
        onChangeText={setNumberOfAsterisk}
        value={numberOfAsterisk}
        keyboardType="numeric" />

      <Button title="Create Figure  ⏳" onPress={createSandclockFigure} />
      <View
        style={[
          styles.containerFigure,
          {transform: [{rotate: `${rotation}deg`}]},
        ]}>
        {figure.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((_, colIndex) => (
              <Text key={`${rowIndex}-${colIndex}`} style={styles.textAsterisk}>
                *
              </Text>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.containerButtons}>
        <Button
          title="Rotate 👈🏼"
          onPress={() => rotateFigure('left')}
          disabled={isFigureEmpty(figure)} 
        />
        <Button
          title="Rotate 👉🏽"
          onPress={() => rotateFigure('right')}
          disabled={isFigureEmpty(figure)} 

        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 120,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
  },
  containerFigure: {
    alignItems: 'center',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  textAsterisk: {
    color: 'blue',
    fontSize: 40,
  },
});

export default ExampleOneScreen;
