/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';

const days = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
];

const months = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
];

export default function Header() {
  const date = new Date();
  const dateFormated =
    days[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${dateFormated}`}</Text>
    </View>
  );
}

const styles = {
  container: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
};
