import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

//Componente para o card de formação acadêmica e experiências profissional
export default function Card({ titulo, children }) {
  return (
    <View style={styles.card_container}>
      <View style={styles.card}>
        <View style={styles.card_header}>
          <Text style={styles.titulo}>{titulo}</Text>
        </View>
        <View style={styles.card_content}>
          {children}
        </View>
      </View>
    </View>
  );
}