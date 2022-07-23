import {Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from '../theme';
import {ButtonCalculator} from '../components';
import {grisClaro, naranja} from '../interfaces';
import {grisOscuro} from '../interfaces/Button';

enum Operators {
  addition,
  subtraction,
  multiplication,
  division,
}


export const CalculatorScreen = () => {
  const [baseNumber, setBaseNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const lasOperation = useRef<Operators>();


  const clean = () => {
    setBaseNumber('0');
    setPreviousNumber('');
  };

  const makeNumber = (numText: string) => {
    if (baseNumber.includes('.') && numText === '.') return;

    if (baseNumber.startsWith('0') || baseNumber.startsWith('-0')) {
      if (numText === '.') {
        setBaseNumber(baseNumber + numText);
      } else if (numText === '0' && baseNumber.includes('.')) {
        setBaseNumber(baseNumber + numText);
      } else if (numText !== '0' && !baseNumber.includes('.')) {
        setBaseNumber(numText);
      } else if (numText === '0' && !baseNumber.includes('.')) {
        setBaseNumber(baseNumber);
      } else {
        setBaseNumber(baseNumber + numText);
      }
    } else {
      setBaseNumber(baseNumber + numText);
    }
  };

  const positiveNegative = () => {
    if (baseNumber.startsWith('0') && !baseNumber.includes('.')) return;

    if (baseNumber.includes('-')) {
      setBaseNumber(baseNumber.replace('-', ''));
    } else {
      setBaseNumber('-' + baseNumber);
    }
  };

  const deletePrevious = (numText: string) => {
    if (baseNumber.startsWith('0') && baseNumber.length === 1) return;
    if (baseNumber.startsWith('-') && baseNumber.length === 2) {
      setBaseNumber('0');
      return;
    }
    const result = baseNumber.slice(0, -1);
    setBaseNumber(result);
  };

  const changePreviousByBase = () => {
    if (baseNumber.endsWith('.')) {
      setPreviousNumber(baseNumber.slice(0, -1));
    } else {
      setPreviousNumber(baseNumber);
    }
    setBaseNumber('0');
  };

  const handleDivision = () => {
    changePreviousByBase();
    lasOperation.current = Operators.division;
  };
  const handleMultiplication = () => {
    changePreviousByBase();
    lasOperation.current = Operators.multiplication;
  };
  const handleSubtraction = () => {
    changePreviousByBase();
    lasOperation.current = Operators.subtraction;
  };
  const handleAddition = () => {
    changePreviousByBase();
    lasOperation.current = Operators.addition;
  };

  const calculate = () => {
    const num1 = Number(previousNumber);
    const num2 = Number(baseNumber);
    switch (lasOperation.current) {
      case Operators.addition:
        setBaseNumber(`${num1 + num2}`);
        break;
      case Operators.subtraction:
        setBaseNumber(`${num1 - num2}`);
        break;
      case Operators.multiplication:
        setBaseNumber(`${num1 * num2}`);
        break;
      case Operators.division:
        if (num2 !== 0) {
          setBaseNumber(`${num1 / num2}`);
        } else {
          setBaseNumber('Congrats! You destroy the universe.');
        }
        break;
      default:
        break;
    }
    setPreviousNumber('0');
  };

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
