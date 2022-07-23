import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../theme';
import {Button} from '../interfaces';

export const ButtonCalculator = ({text, color, buttonWitdh}: Button) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: buttonWitdh ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.textButton,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
