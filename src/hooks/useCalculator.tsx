import { useRef, useState } from "react";



enum Operators {
    addition,
    subtraction,
    multiplication,
    division,
  }
  
export const useCalculator = () => {
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

  return {
    //? Properties:
    baseNumber,
    previousNumber,
    //! Methods:
    calculate,
    clean,
    deletePrevious,
    handleAddition,
    handleDivision,
    handleMultiplication,
    handleSubtraction,
    makeNumber,
    positiveNegative,
  }
}
