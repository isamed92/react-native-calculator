import {Text, View} from 'react-native';
import {styles} from '../theme';
import {ButtonCalculator} from '../components';
import {grisClaro, naranja, grisOscuro} from '../interfaces';
import {useCalculator} from '../hooks';
import React from 'react';

export const CalculatorScreen = () => {
  const {
    previousNumber,
    baseNumber,
    clean,
    positiveNegative,
    deletePrevious,
    handleAddition,
    handleDivision,
    handleMultiplication,
    handleSubtraction,
    makeNumber,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.litResult}>{previousNumber}</Text>
      )}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {baseNumber}
      </Text>
      <View style={styles.row}>
        <ButtonCalculator text="C" color={grisClaro} action={clean} />
        <ButtonCalculator
          text="+/-"
          color={grisClaro}
          action={positiveNegative}
        />
        <ButtonCalculator
          text="del"
          color={grisClaro}
          action={deletePrevious}
        />
        <ButtonCalculator text="/" color={naranja} action={handleDivision} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="7" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="8" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="9" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator
          text="X"
          color={naranja}
          action={handleMultiplication}
        />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="4" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="5" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="6" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="-" color={naranja} action={handleSubtraction} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator text="1" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="2" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="3" color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="+" color={naranja} action={handleAddition} />
      </View>
      <View style={styles.row}>
        <ButtonCalculator
          text="0"
          buttonWitdh
          color={grisOscuro}
          action={makeNumber}
        />
        <ButtonCalculator text="." color={grisOscuro} action={makeNumber} />
        <ButtonCalculator text="=" color={naranja} action={calculate} />
      </View>
    </View>
  );
};
