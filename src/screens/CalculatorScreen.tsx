import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { ButtonCalculator } from '../components'
import { grisClaro, naranja } from '../interfaces';
import { grisOscuro } from '../interfaces/Button';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.litResult} >1,500.00</Text>
      <Text style={styles.result} >1,500.00</Text>
      <View style={styles.row} >
        <ButtonCalculator text='C'      color={grisClaro}/>
        <ButtonCalculator text='+/-'    color={grisClaro}/>
        <ButtonCalculator text='del'    color={grisClaro}/>
        <ButtonCalculator text='/'      color={naranja}/>
      </View>
      <View style={styles.row} >
        <ButtonCalculator text='7'      color={grisOscuro}/>
        <ButtonCalculator text='8'    color={grisOscuro}/>
        <ButtonCalculator text='9'    color={grisOscuro}/>
        <ButtonCalculator text='X'      color={naranja}/>
      </View>
      <View style={styles.row} >
        <ButtonCalculator text='4'      color={grisOscuro}/>
        <ButtonCalculator text='5'    color={grisOscuro}/>
        <ButtonCalculator text='6'    color={grisOscuro}/>
        <ButtonCalculator text='-'      color={naranja}/>
      </View>
      <View style={styles.row} >
        <ButtonCalculator text='1'      color={grisOscuro}/>
        <ButtonCalculator text='2'    color={grisOscuro}/>
        <ButtonCalculator text='3'    color={grisOscuro}/>
        <ButtonCalculator text='+'      color={naranja}/>
      </View>
      <View style={styles.row} >
        <ButtonCalculator text='0' buttonWitdh color={grisOscuro}/>
        <ButtonCalculator text='.'    color={grisOscuro}/>
        <ButtonCalculator text='='      color={naranja}/>
      </View>
    </View>
  )
}
