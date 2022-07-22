import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.litResult} >1,500.00</Text>
      <Text style={styles.result} >1,500.00</Text>
      <View>
        {/* Boton */}
        <View style={styles.button}>
          <Text style={styles.textButton} >1</Text>
        </View>

      </View>
    </View>
  )
}
